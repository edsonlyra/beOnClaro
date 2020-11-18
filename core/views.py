from django.shortcuts import render


def index(request):
    return render(request, 'index.html', {})

def meetup(request):
    return render(request, 'claro-meetup.html', {})

def news(request):
    return render(request, 'news.html', {})

def podcast(request,id=None):
    if isinstance(id,int):
        return render(request, 'beon-podcast.html', {'p_id':id})
    else:
        return render(request, 'beon-podcast-list.html', {})

