from pydantic import BaseModel

class PredictionIn(BaseModel):
    symbol: str
    date: str  # YYYY-MM-DD

class PredictionOut(BaseModel):
    symbol: str
    date: str
    predicted_price: float
    confidence: float
