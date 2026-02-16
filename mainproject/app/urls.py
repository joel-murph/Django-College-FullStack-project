from django.urls import path
from .views import contact_enquiry

urlpatterns = [
    path("", contact_enquiry, name="contact_enquiry"),
]
