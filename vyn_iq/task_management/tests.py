from django.test import TestCase
from django.contrib.auth.models import User
from .models import Task

class TaskModelTest(TestCase):
    def setUp(self):
        self.user = User.objects.create_user('testuser', 'test@test.com', 'testpassword')

    def test_create_task(self):
        task = Task.objects.create(
            user=self.user,
            title='Test Task',
            description='A test task'
        )
        self.assertEqual(task.title, 'Test Task')
        self.assertEqual(task.user, self.user)
