from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from .serializers import ContactEnquirySerializer


@api_view(["POST"])
def contact_enquiry(request):
    print("REQUEST DATA:", request.data)
    serializer = ContactEnquirySerializer(data=request.data)

    if serializer.is_valid():
        serializer.save()
        return Response(
            {"message": "Contact form submitted successfully"},
            status=status.HTTP_201_CREATED,
        )
    return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
