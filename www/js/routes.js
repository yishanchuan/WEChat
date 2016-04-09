//����������һ��ģ��, ���ֽ�wechat.routes, �Ȼ�Ҫ��app.js��ע�����ģ��, �Ż���Ч
angular.module('wechat.routes', [])
.config(function($stateProvider, $urlRouterProvider) {
    //Ĭ��״̬��tab.message
    $urlRouterProvider.otherwise("/tab/message");
    $stateProvider
        //�����tab״̬������, ����tabs.htmlģ��, ע�������abstract: true, ��ʾtabֻ������״̬��ʾ��ʱ��, ������ʾ, ���������޷������������
        .state("tab", {
            url: "/tab",
            abstract: true,
            templateUrl: "templates/tabs.html",
        })
        //tab.message״̬������,����ʾtab-message.htmlģ��, tab.message״̬����tabs.html�е�ui-sref�����õ�. ͬʱע��views�е�tab-message����, ���Ҳ��Ҫ��tabs.html�е�ion-nav-view�е�nameһ��Ŷ
        .state('tab.message', {
            url: '/message',
            views: {
                'tab-message': {
                    templateUrl: 'templates/tab-message.html',
                }
            }
        })
        .state('tab.friends', {
            url: '/friends',
            views: {
                'tab-friends': {
                    templateUrl: 'templates/tab-friends.html',
                }
            }
        })
