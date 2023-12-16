from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MessageSerializer 
from .models import Message
from rest_framework.views import APIView
from rest_framework.response import Response

# Create your views here.
# class MessageView(viewsets.ModelViewSet):
#     serializer_class = MessageSerializer
#     queryset = Message.objects.all()

class MessageView(APIView):
    def get(self, request, *args, **kwargs): 
        try: 
            id = self.kwargs["id"]
            if id != None: 
                message_object = Message.objects.get(id=id)
                serializer = MessageSerializer(message_object)
        except: 
            messages = Message.objects.all()
            serializer = MessageSerializer(messages, many=True)
        return Response(serializer.data)
    
    def post(self, request): 
        message_object = Message.objects.create(message=request.data["message"])
        serializer = MessageSerializer(message_object)
        print(message_object)
        return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs): 
        try: 
            id = self.kwargs["id"]
            if id != None: 
                message_object = Message.objects.get(id=id)
                serializer = MessageSerializer(message_object)
                message_object.delete()

        except: 
            deleted_messages = Message.objects.filter()
            serializer = MessageSerializer(deleted_messages, many=True)
            deleted_messages.delete()

        return Response(serializer.data)
