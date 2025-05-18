from fastapi.testclient import TestClient
from app.main import app

client = TestClient(app)

def test_prediction_route():
    response = client.post("/predict-diabetes", json={
        "Pregnancies": 2,
        "Glucose": 130,
        "BloodPressure": 70,
        "SkinThickness": 20,
        "Insulin": 85,
        "BMI": 25.1,
        "DiabetesPedigreeFunction": 0.5,
        "Age": 31
    })
    assert response.status_code == 200
    assert "prediction" in response.json()
