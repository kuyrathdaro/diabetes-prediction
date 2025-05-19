from fastapi import APIRouter, HTTPException, Body
from app.schemas.diabetes import DiabetesInput
from app.core.model import load_model_and_scaler, make_prediction

router = APIRouter()

@router.post("/predict-diabetes")
def predict(data: DiabetesInput = Body(...)):
    try:
        model, scalar = load_model_and_scaler()
        return make_prediction(model, scalar, data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))