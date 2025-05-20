import pandas as pd
import joblib
import os
from sklearn.linear_model import LogisticRegression
from sklearn.preprocessing import StandardScaler
from app.schemas.diabetes import DiabetesInput
from app.core.config import MODEL_PATH, SCALER_PATH, DATA_PATH, FEATURES


def train_model():
    df = pd.read_csv(DATA_PATH)
    X = df[FEATURES]
    y = df["Outcome"]

    scaler = StandardScaler()
    X_scaled = scaler.fit_transform(X)

    model = LogisticRegression()
    model.fit(X_scaled, y)

    os.makedirs(os.path.dirname(MODEL_PATH), exist_ok=True)
    joblib.dump(model, MODEL_PATH)
    joblib.dump(scaler, SCALER_PATH)

def load_model_and_scaler():
    if not os.path.exists(MODEL_PATH) or not os.path.exists(SCALER_PATH):
        raise FileNotFoundError("Model or scaler not found.")
    return joblib.load(MODEL_PATH), joblib.load(SCALER_PATH)

def make_prediction(model, scaler, input_data: DiabetesInput):
    data_dict = input_data.model_dump()
    input_df = pd.DataFrame([data_dict], columns=FEATURES)
    scaled_input = scaler.transform(input_df)
    prediction = model.predict(scaled_input)[0]
    return {
        "input": data_dict,
        "prediction": int(prediction),
    }
