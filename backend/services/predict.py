from models.predict import PredictionIn, PredictionOut

def get_prediction(data: PredictionIn) -> PredictionOut:
    # Placeholder: Replace with real model inference
    mock_price = 100.0
    confidence = 0.8
    return PredictionOut(
        symbol=data.symbol,
        date=data.date,
        predicted_price=mock_price,
        confidence=confidence,
    )
