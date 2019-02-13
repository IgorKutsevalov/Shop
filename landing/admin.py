from django.contrib import admin
from .models import *


# Register your models here.

class SubscriberAdmin (admin.ModelAdmin):

    list_display = [field.name for field in Subscriber._meta.fields]
    list_filter = ['name',]
    exclude = ["name"]
    search_fields = ['name', 'email']

    # list_display = ['name', 'email']
    # field = ['email']
    # inlines = [FieldMappingInline]

    class Meta:
        model = Subscriber

admin.site.register(Subscriber, SubscriberAdmin)