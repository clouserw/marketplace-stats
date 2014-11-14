define('settings', ['l10n', 'settings_local', 'underscore'], function(l10n, settings_local, _) {
    var gettext = l10n.gettext;

    return _.defaults(settings_local, {
        init_module: 'main',
        default_locale: 'en-US',
        api_url: 'http://' + window.location.hostname,  // No trailing slash, please.
        api_cdn_whitelist: {},

        storage_version: '0',

        api_param_blacklist: ['region'],
        param_whitelist: ['q', 'sort'],

        model_prototypes: {
            'app': 'slug',

            // Dummy prototypes to facilitate testing
            'dummy': 'id',
            'dummy2': 'id'
        },

        fragment_error_template: 'errors/fragment.html',
        pagination_error_template: 'errors/pagination.html',

        tracking_id: 'UA-36116321-6',

        // A list of regions and their L10n mappings.
        REGION_CHOICES_SLUG: {
            'restofworld': gettext('Rest of World'),
            'ar': gettext('Argentina'),
            'bd': gettext('Bangladesh'),
            'br': gettext('Brazil'),
            'cl': gettext('Chile'),
            'cn': gettext('China'),
            'co': gettext('Colombia'),
            'cr': gettext('Costa Rica'),
            'cz': gettext('Czech Republic'),
            'ec': gettext('Ecuador'),
            'sv': gettext('El Salvador'),
            'fr': gettext('France'),
            'de': gettext('Germany'),
            'gr': gettext('Greece'),
            'gt': gettext('Guatemala'),
            'hu': gettext('Hungary'),
            'in': gettext('India'),
            'it': gettext('Italy'),
            'jp': gettext('Japan'),
            'mx': gettext('Mexico'),
            'me': gettext('Montenegro'),
            'ni': gettext('Nicaragua'),
            'pa': gettext('Panama'),
            'pe': gettext('Peru'),
            'pl': gettext('Poland'),
            'rs': gettext('Serbia'),
            'ru': gettext('Russia'),
            'es': gettext('Spain'),
            'uk': gettext('United Kingdom'),
            'us': gettext('United States'),
            'uy': gettext('Uruguay'),
            've': gettext('Venezuela'),
            'None': gettext('No region in search')
        },

        timing_url: '',  // TODO: figure this out

        persona_unverified_issuer: 'login.persona.org',

        title_suffix: 'Firefox Marketplace Statistics',
        switches: []
    });
});
