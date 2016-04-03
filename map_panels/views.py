from django.shortcuts import render_to_response, HttpResponse, redirect, HttpResponseRedirect
from django.shortcuts import render, render_to_response
from django.template import RequestContext

from cartoview.basic.geonode_map_application.views import EditAppInstanceView
from .forms import MapForm, ConfigForm
from .models import MapPanelsApp
from . import APP_NAME
import json


VIEW_MAP_TPL = "%s/view.html" % APP_NAME


def view_map(request, app_id, show_tbar=True):
    instance = MapPanelsApp.objects.get(appinstance_ptr_id=app_id)
    context = {
        "app_id": app_id,
        "instance": instance,
        'show_tbar': show_tbar
    }
    return render_to_response(VIEW_MAP_TPL, context, context_instance=RequestContext(request))


def embed_map(request, app_id):
    return view_map(request, app_id, False)


def map_config(request):
    app_id = request.GET.get("id")
    instance = MapPanelsApp.objects.get(appinstance_ptr_id=app_id)
    config = instance.geonode_map.viewer_json(request.user)
    return HttpResponse(json.dumps(config), content_type="application/json")


class EditMapView(EditAppInstanceView):
    app_name = APP_NAME
    form_class = MapForm
    config_form_class = ConfigForm

    def get_instance(self):
        if 'app_id' in self.kwargs:
            return MapPanelsApp.objects.get(pk=self.kwargs['app_id'])
        return None