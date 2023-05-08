from django.db import models
import uuid
from ckeditor.fields import RichTextField
# Create your models here.
class Home(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    name = models.CharField(max_length=1000)
    self_caption = models.TextField(null = True)
    self_description = models.TextField(null = True)   
    image = models.ImageField() 
    explore_title = models.CharField(max_length= 2000)
    explore_description= models.TextField()
    explore_image = models.ImageField(null = True, blank=False) 

    def __str__(self):
        return self.name

class Work(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    title = models.CharField(max_length=500)
    year = models.DateField(auto_now=False, auto_now_add=False,null=True,blank=True)
    project_description = RichTextField(null=True,blank=True)
    project_challenges = RichTextField(null=True,blank=True)
    project_solution = RichTextField(null=True,blank=True)
    caption= models.CharField(max_length=2000,null = True, blank=True)
    project_Tag = models.ManyToManyField('Tag', blank = True)
    featured = models.BooleanField(null=True,blank=True)
    product_Image = models.FileField(null=True,blank=True) 

    def __str__(self):
        return self.title
    

class WorkImage(models.Model):
    work = models.ForeignKey(Work, default=None, on_delete=models.CASCADE)
    images = models.FileField(null=True,blank=True)
 
    def __str__(self):
        return self.work.title

class Tag(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    name= models.CharField(max_length=500)
    created = models.DateTimeField( auto_now_add= True)

    def __str__(self):
        return self.name

class About(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    about_Description = models.TextField()

    def __str__(self):
        return "About Me"



class Experience(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    work_year= models.CharField(max_length=500)
    worplace_name= models.CharField(max_length=1000)
    role= models.CharField(max_length=1000, null=True,blank=True)
    responsibilities= models.CharField(max_length=1000,null=True,blank=True)

    def __str__(self):
        return self.worplace_name

class Education(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    school_year= models.CharField(max_length=500)
    school_name= models.CharField(max_length=1000)
    level= models.CharField(max_length=1000)

    def __str__(self):
        return (self.level, self.school_name
)
class Skill(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    skill_name= models.CharField(max_length=500)
    proficiency= models.CharField(max_length=1000, null=True,blank=True)

    def __str__(self):
        return self.skill_name

class Journey(models.Model):
    id = models.UUIDField(default = uuid.uuid4, unique= True, primary_key= True, editable = False)
    journey_Title = models.CharField(max_length=500)
    journey_Year = models.DateField(auto_now=False, auto_now_add=False,null=True,blank=True)
    journey_Description = models.TextField(default = "NOT AVAILABLE")
    journey_Image = models.ImageField(null=True,blank=True) 
    def __str__(self):
        return self.journey_Title 