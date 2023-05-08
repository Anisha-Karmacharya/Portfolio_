from django.urls import path
from . import views

urlpatterns = [
    path('', views.home, name='portfolio-home'),
    path('#contact/', views.home, name='portfolio-contact'),
    path('work/', views.work, name='portfolio-work'),
    path('work/<str:title>/', views.workDetail, name='work-detail'),
    path('work/category/<slug:name>/', views.work_filter, name='work-filter'),
    path('about/', views.about, name='portfolio-about'),
    path('about/<str:journey_Title>/', views.journeyDetail, name='journey-detail'),
]