from fastapi import APIRouter, HTTPException, Body
from app.schemas.diabetes import DiabetesInput
from app.core.model import load_model_and_scaler, make_prediction
from app.utils.response import api_response

router = APIRouter()

@router.post("/predict-diabetes")
def predict(data: DiabetesInput = Body(...)):
    try:
        model, scalar = load_model_and_scaler()
        result = make_prediction(model, scalar, data)
        prediction = result.get("prediction")
        message = "The person is diabetic" if prediction == 1 else "The person is not diabetic"
        return api_response(
            message=message,
            data=result
        )
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))