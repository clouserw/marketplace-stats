define('routes_api', [], function() {
    return {
        'apps_added': '/api/v1/stats/global/apps_added_by_premium/',
        'total_developers': '/api/v1/stats/global/total_developers/',
        'total_visits': '/api/v1/stats/global/total_visits/',
        'apps_installed': '/api/v1/stats/global/apps_installed/',
        'apps_by_type': '/api/v1/stats/global/apps_added_by_package/',

        'apps_available_by_type': '/api/v1/stats/global/apps_available_by_package/',
        'apps_available_by_premium': '/api/v1/stats/global/apps_available_by_premium/',

        // Per app stats:
        'per_app_installs': '/api/v1/stats/app/{0}/installs/',
        'per_app_visits': '/api/v1/stats/app/{0}/visits/',

        'login': '/api/v1/account/login/'
    };
});
