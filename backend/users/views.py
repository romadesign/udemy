from rest_framework.views import APIView
from rest_framework import status
from rest_framework.response import Response
from rest_framework.exceptions import AuthenticationFailed
from .serializers import UserSerializer, UserSerializer_Detail
from .models import User
import jwt, datetime
# Create your views here.


class RegisterView(APIView):
    def post(self, request):
        
        serializer = UserSerializer(data = request.data)
        serializer.is_valid(raise_exception=True)
      
        user = User.objects.get_or_create(
            username=request.data["username"],
            name=request.data["name"],
            email=request.data["email"],
            role=request.data["role"],
            # first_name=request.data["first_name"],
            # last_name=request.data["last_name"],
            # location=request.data["location"],
            # url=request.data["url"],
            # birthday=request.data["birthday"],
            # age_limit=request.data["age_limit"],
            # verified=request.data["verified"],
            # total_earnings=0,
            # total_spent=0,
            # sales=0,
        )
        status_code = status.HTTP_201_CREATED
        response = {
            'success' : 'True',
            'status code' : status_code,
            'message': 'User registered  successfully',
            }
        return Response(response, status=status_code)
        
        
        # serializer = UserSerializer(data=request.data)
        # serializer.is_valid(raise_exception=True)
        # serializer.save()
        # status_code = status.HTTP_201_CREATED
        # response = {
        #     'success' : 'True',
        #     'status code' : status_code,
        #     'message': 'User registered  successfully',
        #     }
        # return Response(response, status=status_code)


class LoginView(APIView):
    def post(self, request):
        email = request.data['email']
        password = request.data['password']

        user = User.objects.filter(email=email).first()

        if user is None:
            raise AuthenticationFailed('User not found!')

        if not user.check_password(password):
            raise AuthenticationFailed('Incorred password!')

        payload = {
            'id': user.id,
            'exp': datetime.datetime.utcnow() + datetime.timedelta(minutes=60),
            'iat': datetime.datetime.utcnow()
        }

        token = jwt.encode(payload, 'secret', algorithm='HS256')

        response = Response()

        response.set_cookie(key='jwt', value=token, httponly=True)

        response.data = {
            'jwt': token
        }

        return response


class UserView(APIView):
    def get(self, request):
        token = request.COOKIES.get('jwt')

        if not token:
            raise AuthenticationFailed('Unauthenticated!')

        try:
            payload = jwt.decode(token, 'secret', algorithms=["HS256"])

        except jwt.ExpiredSignatureError:
            raise AuthenticationFailed('Unauthenticated!')

        user = User.objects.filter(id=payload['id']).first()
        serializer = UserSerializer_Detail(user)

        return Response(serializer.data)


class LogoutView(APIView):
    def post(self, request):
        response = Response()
        response.delete_cookie('jwt')
        response.data = {
            'message': 'success'
        }
        return response
