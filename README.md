# CCL

python manage.py makemigrations
python manage.py migrate
python manage.py createsuperuser
python manage.py populate_catalog

config
├── __init__.py
├── __pycache__
├── asgi.py
├── settings.py
├── urls.py
└── wsgi.py
communications
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── migrations
├── models.py
├── signals.py
├── templates
│   └── communications
│       └── notificacion_list.html
├── templatetags
├── tests.py
├── urls.py
└── views.py
content
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── forms.py
├── migrations
├── models.py
├── signals.py
├── static
│   └── content
│       ├── css
│       │   └── noticias_list.css
│       └── js
│           └── noticias_list.js
├── templates
│   └── content
│       ├── noticia_detail.html
│       └── noticia_list.html
├── tests.py
├── urls.py
└── views.py
core
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── migrations
├── models.py
├── static
│   ├── css
│   │   ├── main.css
│   │   └── nosotros.css
│   ├── img
│   │   ├── CCL_Logo.png
│   │   └── team
│   │       ├── team-1.jpg
│   │       ├── team-2.jpg
│   │       ├── team-3.jpg
│   │       └── team-4.jpg
│   └── js
│       └── nosotros.js
├── templates
│   └── core
│       └── landing_page.html
├── tests.py
├── urls.py
└── views.py
memberships
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── forms.py
├── migrations
├── models.py
├── services.py
├── signals.py
├── templates
│   └── memberships
│       ├── solicitud_detail.html
│       ├── solicitud_form.html
│       └── solicitud_selector.html
├── tests.py
├── urls.py
└── views.py
services
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── forms.py
├── management
├── migrations
├── models.py
├── services.py
├── signals.py
├── static
│   └── services
│       ├── css
│       │   ├── convenio_list.css
│       │   └── servicios_custom.css
│       ├── img
│       └── js
│           ├── convenio_list.js
│           └── servicios.js
├── templates
│   └── services
│       ├── convenio_detail.html
│       ├── convenio_list.html
│       ├── mis_solicitudes.html
│       ├── recurso_detail.html
│       ├── servicio_detail.html
│       ├── servicio_list.html
│       └── solicitud_form.html
├── tests.py
├── urls.py
└── views.py
staff_panel
├── admin.py
├── apps.py
├── forms.py
├── migrations
├── models.py
├── templates
│   └── staff_panel
│       ├── dashboard.html
│       ├── noticia_form.html
│       ├── noticia_list.html
│       ├── servicio_detail_staff.html
│       ├── servicio_form.html
│       ├── servicio_list_staff.html
│       ├── solicitud_afiliacion_list.html
│       ├── solicitud_afiliacion_manage.html
│       ├── solicitud_servicio_list.html
│       └── solicitud_servicio_manage.html
├── tests.py
├── urls.py
└── views.py
static
└── bootstrap-5.0.2-dist
    ├── css
    │   ├── bootstrap-grid.css
    │   ├── bootstrap-grid.css.map
    │   ├── bootstrap-grid.min.css
    │   ├── bootstrap-grid.min.css.map
    │   ├── bootstrap-grid.rtl.css
    │   ├── bootstrap-grid.rtl.css.map
    │   ├── bootstrap-grid.rtl.min.css
    │   ├── bootstrap-grid.rtl.min.css.map
    │   ├── bootstrap-reboot.css
    │   ├── bootstrap-reboot.css.map
    │   ├── bootstrap-reboot.min.css
    │   ├── bootstrap-reboot.min.css.map
    │   ├── bootstrap-reboot.rtl.css
    │   ├── bootstrap-reboot.rtl.css.map
    │   ├── bootstrap-reboot.rtl.min.css
    │   ├── bootstrap-reboot.rtl.min.css.map
    │   ├── bootstrap-utilities.css
    │   ├── bootstrap-utilities.css.map
    │   ├── bootstrap-utilities.min.css
    │   ├── bootstrap-utilities.min.css.map
    │   ├── bootstrap-utilities.rtl.css
    │   ├── bootstrap-utilities.rtl.css.map
    │   ├── bootstrap-utilities.rtl.min.css
    │   ├── bootstrap-utilities.rtl.min.css.map
    │   ├── bootstrap.css
    │   ├── bootstrap.css.map
    │   ├── bootstrap.min.css
    │   ├── bootstrap.min.css.map
    │   ├── bootstrap.rtl.css
    │   ├── bootstrap.rtl.css.map
    │   ├── bootstrap.rtl.min.css
    │   └── bootstrap.rtl.min.css.map
    └── js
        ├── bootstrap.bundle.js
        ├── bootstrap.bundle.js.map
        ├── bootstrap.bundle.min.js
        ├── bootstrap.bundle.min.js.map
        ├── bootstrap.esm.js
        ├── bootstrap.esm.js.map
        ├── bootstrap.esm.min.js
        ├── bootstrap.esm.min.js.map
        ├── bootstrap.js
        ├── bootstrap.js.map
        ├── bootstrap.min.js
        └── bootstrap.min.js.map
templates
├── base.html
└── nosotros.html
users
├── __init__.py
├── __pycache__
├── admin.py
├── apps.py
├── forms.py
├── migrations
├── models.py
├── signals.py
├── templates
│   └── users
│       ├── dashboard.html
│       ├── login.html
│       ├── password_change_done.html
│       ├── password_change_form.html
│       ├── password_reset_complete.html
│       ├── password_reset_confirm.html
│       ├── password_reset_done.html
│       ├── password_reset_email.html
│       ├── password_reset_form.html
│       ├── perfil_detail.html
│       ├── perfil_form.html
│       └── registro.html
├── tests.py
├── urls.py
└── views.py