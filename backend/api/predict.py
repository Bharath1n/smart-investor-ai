from fastapi import APIRouter
from models.predict import PredictionIn, PredictionOut
from services.predict import get_prediction

router = APIRouter()

@router.post("/", response_model=PredictionOut)
def predict_stock(data: PredictionIn):
    """Predict stock price for a given symbol and date."""
    result = get_prediction(data)
    return result
