//ʡ������JS

var province_arr = new Array (	'99ѡ��ʡ��',
								'11������',
								'12�����',
								'13�ӱ�ʡ',
								'14ɽ��ʡ',
								'15���ɹ�',
								'21����ʡ',
								'22����ʡ',
								'23������ʡ',
								'31�Ϻ���',
								'32����ʡ',
								'33�㽭ʡ',
								'34����ʡ',
								'35����ʡ',
								'36����ʡ',
								'37ɽ��ʡ',
								'41����ʡ',
								'42����ʡ',
								'43����ʡ',
								'44�㶫ʡ',
								'45����',
								'46����ʡ',
								'50������',
								'51�Ĵ�ʡ',
								'52����ʡ',
								'53����ʡ',
								'54����',
								'61����ʡ',
								'62����ʡ',
								'63�ຣʡ',
								'64����',
								'65�½�',
                                '71̨��',
                                '81���',
                                '82����');

var city_arr = new Array	(	'999999��ѡ����л����',
								'110100������',
								'120100�����',
								'500100������',
								'310100�Ϻ���',
								'130100ʯ��ׯ',
								'130200��ɽ',
								'130300�ػʵ�',
								'130400����',
								'130500��̨',
								'130600����',
								'130700�żҿ�',
								'130800�е�',
								'130900����',
								'131000�ȷ�',
								'131100��ˮ',
								'140100̫ԭ',
								'140200��ͬ',
								'140300��Ȫ',
								'140400����',
								'140500����',
								'140600˷��',
								'140700����',
								'140800�˳�',
								'140900����',
								'141000�ٷ�',
								'141100����',
								'150100���ͺ���',
								'150200��ͷ',
								'150300�ں�',
								'150400���',
								'150500ͨ��',
								'150600������˹',
								'150700���ױ���',
								'150800�����׶�',
								'150900�����첼',
								'152200�˰�',
								'152500���ֹ���',
								'152900������',
								'210100����',
								'210200����',
								'210300��ɽ',
								'210400��˳',
								'210500��Ϫ',
								'210600����',
								'210700����',
								'210800Ӫ��',
								'210900����',
								'211000����',
								'211100�̽�',
								'211200����',
								'211300����',
								'211400��«��',
								'220100����',
								'220200����',
								'220300��ƽ',
								'220400��Դ',
								'220500ͨ��',
								'220600��ɽ',
								'220700��ԭ',
								'220800�׳�',
								'222400�ӱ�',
								'230100������',
								'230200�������',
								'230300����',
								'230400�׸�',
								'230500˫Ѽɽ',
								'230600����',
								'230700����',
								'230800��ľ˹',
								'230900��̨��',
								'231000ĵ����',
								'231100�ں�',
								'231200�绯',
								'232700���˰���',
								'320100�Ͼ�',
								'320200����',
								'320300����',
								'320400����',
								'320500����',
								'320600��ͨ',
								'320700���Ƹ�',
								'320800����',
								'320900�γ�',
								'321000����',
								'321100��',
								'321200̩��',
								'321300��Ǩ',
								'330100����',
								'330200����',
								'330300����',
								'330400����',
								'330500����',
								'330600����',
								'330700��',
								'330800����',
								'330900��ɽ',
								'331000̨��',
								'331100��ˮ',
								'340100�Ϸ�',
								'340200�ߺ�',
								'340300����',
								'340400����',
								'340500����ɽ',
								'340600����',
								'340700ͭ��',
								'340800����',
								'341000��ɽ',
								'341100����',
								'341200����',
								'341300����',
								'341400����',
								'341500����',
								'341600����',
								'341700����',
								'341800����',
								'350100����',
								'350200����',
								'350300����',
								'350400����',
								'350500Ȫ��',
								'350600����',
								'350700��ƽ',
								'350800����',
								'350900����',
								'360100�ϲ�',
								'360200������',
								'360300Ƽ��',
								'360400�Ž�',
								'360500����',
								'360600ӥ̶',
								'360700����',
								'360800����',
								'360900�˴�',
								'361000����',
								'361100����',
								'370100����',
								'370200�ൺ',
								'370300�Ͳ�',
								'370400��ׯ',
								'370500��Ӫ',
								'370600��̨',
								'370700Ϋ��',
								'370800����',
								'370900̩��',
								'371000����',
								'371100����',
								'371200����',
								'371300����',
								'371400����',
								'371500�ĳ�',
								'371600����',
								'371700����',
								'410100֣��',
								'410200����',
								'410300����',
								'410400ƽ��ɽ',
								'410500����',
								'410600�ױ�',
								'410700����',
								'410800����',
								'410881��Դ',
								'410900���',
								'411000����',
								'411100���',
								'411200����Ͽ',
								'411300����',
								'411400����',
								'411500����',
								'411600�ܿ�',
								'411700פ����',
								'420100�人',
								'420200��ʯ',
								'420300ʮ��',
								'420500�˲�',
								'420600�差',
								'420700����',
								'420800����',
								'420900Т��',
								'421000����',
								'421100�Ƹ�',
								'421200����',
								'421300����',
								'422800��ʩ',
								'429004����',
								'429005Ǳ��',
								'429006����',
								'429021��ũ��',
								'430100��ɳ',
								'430200����',
								'430300��̶',
								'430400����',
								'430500����',
								'430600����',
								'430700����',
								'430800�żҽ�',
								'430900����',
								'431000����',
								'431100����',
								'431200����',
								'431300¦��',
								'433100����',
								'440100����',
								'440200�ع�',
								'440300����',
								'440400�麣',
								'440500��ͷ',
								'440600��ɽ',
								'440700����',
								'440800տ��',
								'440900ï��',
								'441200����',
								'441300����',
								'441400÷��',
								'441500��β',
								'441600��Դ',
								'441700����',
								'441800��Զ',
								'441900��ݸ',
								'442000��ɽ',
								'445100����',
								'445200����',
								'445300�Ƹ�',
								'450100����',
								'450200����',
								'450300����',
								'450400����',
								'450500����',
								'450600���Ǹ�',
								'450700����',
								'450800���',
								'450900����',
								'451000��ɫ',
								'451100����',
								'451200�ӳ�',
								'451300����',
								'451400����',
								'460100����',
								'460200����',
								'469001��ָɽ',
								'469002����',
								'469003����',
								'469005�Ĳ�',
								'469006����',
								'469007����',
								'469025����',
								'469026�Ͳ�',
								'469027����',
								'469028�ٸ�',
								'469030��ɳ',
								'469031����',
								'469033�ֶ�',
								'469034��ˮ',
								'469035��ͤ',
								'469036����',
								'469037��ɳ',
								'469038��ɳ',
								'469039��ɳ',
								'510100�ɶ�',
								'510300�Թ�',
								'510400��֦��',
								'510500����',
								'510600����',
								'510700����',
								'510800��Ԫ',
								'510900����',
								'511000�ڽ�',
								'511100��ɽ',
								'511300�ϳ�',
								'511400üɽ',
								'511500�˱�',
								'511600�㰲',
								'511700����',
								'511800�Ű�',
								'511900����',
								'512000����',
								'513200����',
								'513300����',
								'513400��ɽ',
								'520100����',
								'520200����ˮ',
								'520300����',
								'520400��˳',
								'522200ͭ��',
								'522300ǭ����',
								'522400�Ͻ�',
								'522600ǭ����',
								'522700ǭ��',
								'530100����',
								'530300����',
								'530400��Ϫ',
								'530500��ɽ',
								'530600��ͨ',
								'530700����',
								'530800�ն�',
								'530900�ٲ�',
								'532300����',
								'532500���',
								'532600��ɽ',
								'532800��˫����',
								'532900����',
								'533100�º�',
								'533300ŭ��',
								'533400����',
								'540100����',
								'542100����',
								'542200ɽ��',
								'542300�տ���',
								'542400����',
								'542500����',
								'542600��֥',
								'610100����',
								'610200ͭ��',
								'610300����',
								'610400����',
								'610500μ��',
								'610600�Ӱ�',
								'610700����',
								'610800����',
								'610900����',
								'611000����',
								'620100����',
								'620200������',
								'620300���',
								'620400����',
								'620500��ˮ',
								'620600����',
								'620700��Ҵ',
								'620800ƽ��',
								'620900��Ȫ',
								'621000����',
								'621100����',
								'621200¤��',
								'622900����',
								'623000����',
								'630100����',
								'632100����',
								'632200����',
								'632300����',
								'632500����',
								'632600����',
								'632700����',
								'632800����',
								'640100����',
								'640200ʯ��ɽ',
								'640300����',
								'640400��ԭ',
								'640500����',
								'650100��³ľ��',
								'650200��������',
								'652100��³��',
								'652200����',
								'652300����',
								'652700����',
								'652800�����',
								'652900������',
								'653000��ͼʲ',
								'653100��ʲ',
								'653200����',
								'654000����',
								'654200����',
								'654300����̩',
								'659001ʯ����',
								'659002������',
								'659003ͼľ���',
								'659004�����',
								'710000̨��',
								'810000���',
								'820000����');
    function addOptions(obj,arr_str,num){
        var oOption = document.createElement("OPTION");
        oOption.text=arr_str.substring(num);
        oOption.value=arr_str.substring(0,num);
        obj.options.add(oOption);
    }
     
     
    function setCity(province,city){
        var tempstr = province[province.selectedIndex].value;
        city.length=0;
        var city_len = city_arr.length;
        for(var i=0;i<city_len;i++){
            if(city_arr[i].substring(0,2)==tempstr){
                addOptions(city,city_arr[i],6);
            }
        }
    }

    function setOption(pid,cid,city_id){
        var prov_id = '99';
        var p = document.getElementById(pid);
        var c = document.getElementById(cid);
        var prov_len = province_arr.length;
        //if(p.length<3){
            p.length = 0;
            for(var i=0;i<prov_len;i++){
                addOptions(p,province_arr[i],2);
            }
        //}
        if(city_id != ''){
            prov_id = city_id.substring(0,2);
            for(var i=0;i<prov_len;i++){
                if(province_arr[i].indexOf(prov_id) === 0){
                    p.selectedIndex = i;
                    break;
                }
            }
        }
        setCity(p,c);
        if(city_id != ''){
            for(var i=0;i<c.length;i++){
                if(c.options[i].value == city_id){
                  c.selectedIndex = i;
                  break;
                }
            }
        }
        p.onchange = function(){
            setOption(pid,cid,this.value,'');
        }
    }