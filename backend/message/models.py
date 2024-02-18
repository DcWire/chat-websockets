import uuid 
from django.db import models

# Create your models here.
class Message(models.Model):
    id = models.UUIDField(primary_key=True, default=uuid.uuid4, editable=False)
    message = models.TextField(null=False)
    type = models.BooleanField(null=False, default=0)
    def __str__(self):
        return self.message 