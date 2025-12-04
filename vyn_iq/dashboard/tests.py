from django.test import TestCase
from django.contrib.auth.models import User
from .models import Business

class BusinessModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('testuser', 'test@test.com', 'testpassword')

    def test_create_business(self):
        business = Business.objects.create(
            user=self.user,
            name='Test Business',
            worth=100000
        )
        self.assertEqual(business.name, 'Test Business')
        self.assertEqual(business.user, self.user)
