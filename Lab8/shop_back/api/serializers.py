from django.core import serializers

def serialize_model(model_instance):
    data = serializers.serialize('json', [model_instance])[0]
    return data
def serialize_model_list(model_instances):
    data = serializers.serialize('json', model_instances)
    return data
