from django.shortcuts import render
from rest_framework import viewsets
from .serializers import MessageSerializer 
from .models import Message
from rest_framework.views import APIView
from rest_framework.response import Response
from transformers import AutoTokenizer, AutoModelForSeq2SeqLM

def get_message(text):
    model_name = 'google/flan-t5-base'
    model = AutoModelForSeq2SeqLM.from_pretrained(model_name)
    tokenizer = AutoTokenizer.from_pretrained(model_name)


    input_ids = tokenizer(text, return_tensors="pt")
    output = model.generate(
    input_ids=input_ids['input_ids'],
    num_return_sequences=1,  # Generate 3 different outputs
    )
    response = tokenizer.decode(output[0], skip_special_tokens=True)
    return response

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
        # message_object = Message.objects.create(message=request.data["message"], type=request.data["type"])
        # serializer = MessageSerializer(message_object)
        
        # print(request.data)
        # print(message_object)
        response_text = get_message(request.data["message"])
        print(response_text)
        return Response(response_text)
        # return Response(serializer.data)
    
    def delete(self, request, *args, **kwargs): 
        try: 
            id = self.kwargs["id"]
            if id != None: 
                message_object = Message.objects.get(id=id)
                serializer = MessageSerializer(message_object)
                message_object.delete()

        except: 
            deleted_messages = Message.objects.all()
            serializer = MessageSerializer(deleted_messages, many=True)
            deleted_messages.delete()

        return Response(serializer.data)
