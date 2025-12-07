from ai_engine.models import Recommendation

def run():
    Recommendation.objects.all().delete()

    recommendations = [
        {"title": "Expand to new markets", "recommendation": "Consider expanding your Safari Surf business to the European market."},
        {"title": "Optimize your supply chain", "recommendation": "You can reduce costs by optimizing the supply chain for your Tanzanite Tea business."},
        {"title": "Invest in marketing", "recommendation": "Invest in social media marketing to increase the visibility of your BodaVolt business."},
    ]

    for rec_data in recommendations:
        Recommendation.objects.create(**rec_data)

    print("Recommendations populated successfully!")
