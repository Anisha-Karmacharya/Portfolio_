from django.shortcuts import get_object_or_404, redirect, render
from .models import Home, Work, WorkImage, Tag , About, Experience, Education, Skill, Journey
def home(request):
    home = Home.objects.all()
    works = Work.objects.filter(featured = True)
    option = Tag.objects.all().distinct()
    context = {'home' : home, 'title': 'Home',  "featured": works, 'option': option}
    return render(request, 'myPortfolio/home.html', context)

def work(request):
    works = Work.objects.all()
    tags = Tag.objects.all().distinct()
    context = {'projects' : works, 'title': 'Work', 'tags': tags}
    return render(request, 'myPortfolio/work.html', context)

def work_filter(request, name):
    tag = get_object_or_404(Tag, name=name)
    #  queryset = tag.work_filter.all()
    filtertags = Tag.objects.get(name = name)
    tags = Tag.objects.all().distinct()
    projects = Work.objects.filter(project_Tag = filtertags)
    context ={'projects': projects, 'tags': tags, 'filtertags': filtertags}
    return render(request, 'myPortfolio/workFilter.html', context)

def workDetail(request, title):
    workObj = Work.objects.get(title=title)
    workImage = WorkImage.objects.filter(work=workObj)
    worktags = workObj.project_Tag.all()
    context = {'work' : workObj, 'title': 'Work-Detail', 'worktags' : worktags, "workImage" : workImage}
    return render(request, 'myPortfolio/workdetail.html', context)

def about(request):
    about = About.objects.all()
    experience = Experience.objects.all()
    education = Education.objects.all()
    skill = Skill.objects.all()
    journey = Journey.objects.all()
    context = { 'title': 'About', 'about': about, 'experiences':experience, 'education': education, 'skills':skill, 'journeys': journey}
    return render(request, 'myPortfolio/about.html', context)

def journeyDetail(request, journey_Title):
    journeyObj = Journey.objects.get(journey_Title=journey_Title)
    context = {'journey' : journeyObj, 'title': 'Journey-Detail'}
    return render(request, 'myPortfolio/journeyDetails.html', context)


