from fastapi import APIRouter, HTTPException
from app.schemas.diabetes import DiabetesInput
from app.core.model import load_model_and_scalar, make_prediction

router = APIRouter()

@router.post("/predict-diabetes")
def predict(data: DiabetesInput):
    try:
        model, scalar = load_model_and_scalar()
        return make_prediction(model, scalar, data)
    except Exception as e:
        raise HTTPException(status_code=500, detail=str(e))