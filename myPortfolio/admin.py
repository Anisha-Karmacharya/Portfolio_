from django.contrib import admin
from .models import Home, Work, WorkImage, Tag, About, Experience, Education, Skill, Journey
# Register your models here.
class WorkImageAdmin(admin.StackedInline):
    model = WorkImage
 
@admin.register(Work)
class WorkAdmin(admin.ModelAdmin):
    inlines = [WorkImageAdmin]
 
    class Meta:
       model = Work
 
@admin.register(WorkImage)
class WorkImageAdmin(admin.ModelAdmin):
    pass

@admin.register(About)
class AboutAdmin(admin.ModelAdmin):
  def has_add_permission(self, request):
    # if there's already an entry, do not allow adding
    count = About.objects.all().count()
    if count == 0:
      return True
    return False

@admin.register(Home)
class HomeAdmin(admin.ModelAdmin):
  def has_add_permission(self, request):
    # if there's already an entry, do not allow adding
    count = Home.objects.all().count()
    if count == 0:
      return True
    return False

    class Meta:
       model = Home
   

admin.site.register(Tag)
admin.site.register(Education)
admin.site.register(Experience)
admin.site.register(Skill)
admin.site.register(Journey)
