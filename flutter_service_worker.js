'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "7ed73c0e9e072f50176bce30aaa7c496",
".git/config": "0907564933e6dd7960b9be1966df0b6c",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "e1b284733f11fb641e1c8c2945170ff6",
".git/HEAD": "dfebbe193e255e26c1b45fa445375b01",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b0fc5c8ba3f41f0e85d8a5ad285d00c1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "b44a05bbef8421a0a753c85b06f2ea9a",
".git/logs/refs/heads/develop": "12d1552ad5144365875c4e3071544da6",
".git/logs/refs/heads/release": "516fa25ddafb5b809efe3810003d2dd9",
".git/logs/refs/remotes/origin/develop": "35c72f4ce6427d61f597b475cbfe0e0b",
".git/logs/refs/remotes/origin/HEAD": "feadd4f32971fa159a7c0274705520cd",
".git/logs/refs/remotes/origin/main": "ffc3ed1f1d4a80f4a9416135ac5c0f7b",
".git/logs/refs/remotes/origin/release": "befeb85f99646adcf96d8cdce71502cc",
".git/objects/00/71d5ea57a1a57130e6b45a0bec9f63f5e60e03": "1f4506fffbe2d30f7d6be60b01cf20be",
".git/objects/03/c531a7a4eadfbb97e5434401927ee31890cf33": "fe6b24f60048b7f218835d95c2c650ae",
".git/objects/08/a18584e6f017c32b3d64b2647157ea127aadb3": "d3b84ecc2ec015a7726e0798449e44b4",
".git/objects/09/7c0ec1cafc45b328c2b831b1f9d9c3aaafd8fa": "d3319d67e9e2b61fdefa426c296e73a5",
".git/objects/0b/85bcdb86bf9e9f9fda81b13cec9c9349d47d77": "77cbf4b6cc88e2471afd14a98ef2e0ed",
".git/objects/0c/d9a7afc7f46502082ad86b694bb1e381b8a451": "5a396a82578fa29bd67e6e20f2c70b59",
".git/objects/1d/384f3748038966a5c7316223edf120dd5894dd": "a8d542276aa823dfefb8d26439e1077a",
".git/objects/1e/bf993c04c08e17a0122730f8d7ce6e139c8bad": "eeb4f0d71f24758335fe1753273ad6c2",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/21/a7667fa03816b06c4198cc49f9523cc4a4e974": "95c2d626f22e8175e7250576fd964322",
".git/objects/27/2ae9ed6e1a4c8b8a16fb5ab59d9325fc79d613": "4eed0b5849d5f6f57bba42c98f764266",
".git/objects/27/a297abdda86a3cbc2d04f0036af1e62ae008c7": "51d74211c02d96c368704b99da4022d5",
".git/objects/28/0898e929e9aab92652f2d5b6965f99ff583841": "79d9d2c1610e5d5922c0ada7b65efe1a",
".git/objects/30/2a7c3a2372dbcd25c5973289b93e5e60c26b7c": "0e50e6330279fec88ff842912c0f0800",
".git/objects/35/91af41948adc8001f3586d76b91181311953fc": "c91d33b29071dcff3b2b3385383761cb",
".git/objects/37/7580cbf691d03aea79c63a3a251b1b48ac01f1": "c196d282a50e3c372b4445c6b8868297",
".git/objects/3a/d1e0b39d5d6eb7ea000b85b18a4480b6d7e41a": "84805614ec101c87fa55ef911120b769",
".git/objects/44/1ef17700fc630fe0f6aeff72cf302cd800880c": "4226a5f5595accf84565c3084ac1f463",
".git/objects/46/6324d7b9903bb8dd5479c499dcae90b135a99c": "ac34872d41f62ab3f53d812486416aa2",
".git/objects/46/aba720fccecc4320b05c263f37677852034263": "bfdce433450f5d2d5331a7f8efc33cf1",
".git/objects/4d/5216e686fdf80170dc7ce5c1b6e01ad6456a64": "a8cd3ee16af568aa024c0b33383d75bc",
".git/objects/51/34e6402246228fb7f58ce8fe76727a61d99a62": "6b5e5b48febe40daec7062aecdc3b39f",
".git/objects/52/409dd21bffb6bc8fd214be03c927f6db24856e": "67067fc8f038cfd2df4b99148b40fbe4",
".git/objects/58/61e0a508eb5932505d8e89762cb2d521ff9f17": "4d1feab83bab7c0e5cb6c0b569eb9f76",
".git/objects/5a/489953aabb4c9cf9ca89d736e4d45cdff2310a": "f481ae6011a783a2da2914222ba87bf4",
".git/objects/5e/5a6fe1f84ace7683d891271c45184a88a7d0f6": "0894ae640e5e4f82fa531646e5db4a96",
".git/objects/5f/2bcd151565750619a553e2cd02d95452b48123": "0ec2f7926349be901f08c61bdae0672a",
".git/objects/60/1868edeebb49e8b07287866ac14d39db106463": "ac1bc35b278a45263f154a2b73fc459a",
".git/objects/62/89113ddf3cd87ff8ad352cbbb7042e6b87d529": "d2ba744ad9f650dc8761c35d51bbcd91",
".git/objects/62/a01d6826913d9efa140d2e9f4bc0f13918e607": "44ba2af6a4f05cb190463143170ae010",
".git/objects/63/6931bcaa0ab4c3ff63c22d54be8c048340177b": "8cc9c6021cbd64a862e0e47758619fb7",
".git/objects/69/112108cee48178cfefb09ba834f24d4766f972": "047223794e35a31fe4233c786cf22586",
".git/objects/6a/020dee56ff524a71ce3265ca822000fc6f2952": "5571e0b184bae3b780999b284774cb4f",
".git/objects/6c/afa7717ce8369fb3e2c1961a8a38a582197b5a": "176f00c404d8d53d9622658f5a13f49d",
".git/objects/6d/5f0fdc7ccbdf7d01fc607eb818f81a0165627e": "2b2403c52cb620129b4bbc62f12abd57",
".git/objects/6e/ccac296239ea6218794e16467d0d68deb5ab4e": "b3b21fc577dfd7f92aef0c268b75f481",
".git/objects/6f/5330687f942c46a19651dba17871b270e68ce6": "d87f8244d73557af7d3b66fede4dfd91",
".git/objects/70/010cc4761157d9d7cc2d082cf342e63fe1190a": "baf21d1dacab382149ee93266543ff40",
".git/objects/73/7f149c855c9ccd61a5e24ce64783eaf921c709": "1d813736c393435d016c1bfc46a6a3a6",
".git/objects/78/fdfaa7ad1df35132300f7dc15161a5254c7644": "23378de94c1a96fc0337dda647fdc5ae",
".git/objects/7b/2809a9b4bf444d5cd5bbe002056e7888c9a922": "7eca91fa29705744fb5c9b942a3c8c37",
".git/objects/7d/51319cb99d93d816896305e4db1881ece138cd": "09f325733b40423872dd533840edd9e4",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/86/888ad010b893735cd03ef598e2471671f15748": "7b0c09089f52f0f68caad05e87b0f2c3",
".git/objects/8e/7f4b338840099949781ab85496d7a67fae46f1": "7f2803c236e9e7d95ef6ed16a3a2bd13",
".git/objects/8f/50e76e12a09fd85096f475329e3d8c31d2468b": "31194aef8ed64a1781c9fcf5bd0d8bae",
".git/objects/91/0a1b526fe34a464db7a0363fd93ce297f26ae5": "a1bd8520d326877f9dfa00c96dcd91ef",
".git/objects/97/8a4d89de1d1e20408919ec3f54f9bba275d66f": "dbaa9c6711faa6123b43ef2573bc1457",
".git/objects/97/e52807cfa5f2b3953bbb462b186234e3386eff": "fa56bd581cf4850453257b9b3209cb69",
".git/objects/ae/37803d1933c3979fd1b939ff61cc667b0b70dc": "f5c08c98e82ebd9034dbd78b64a292fa",
".git/objects/ae/917b8898df888bcbeb58ea9ab37a6dcee5c2fd": "c3642b388298b5187d6b3b8a43b246ff",
".git/objects/ae/de027d0d73ec3397ccd71326aa2117a968178f": "15dd82a925ad15cdfcad6f056c85958f",
".git/objects/af/2981716dd5c95b6636a1f7280068d713d0936b": "a782487c0f7c0eba8a2d771c50d36474",
".git/objects/af/31ef4d98c006d9ada76f407195ad20570cc8e1": "a9d4d1360c77d67b4bb052383a3bdfd9",
".git/objects/af/bd77abbe52ab3869a3264202ed8455e6206948": "6e6efb132ea291f8c7bbb5ecdc6d0c10",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/afd5429fbe3cc7a88b89f454006eb7b018849a": "e4c2e016668208ba57348269fcb46d7b",
".git/objects/b2/2fdb2d1fa6a3bced274617d58f6ab432bb0d8b": "1b405e4dfab487f51d41422d52600614",
".git/objects/b8/ef405613d995390b2f601715490f7849cd1159": "a26efc95cf9b7965f6425f02a6da806d",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/ba/dce495c57eb79854b3c26d2d2eda46c1412279": "dca93ae8d5df652a51cf134917ed0480",
".git/objects/bb/ac29f5ef7a40bf14c0901bc1457724156bc0de": "1393f20f0610cabefe2d4f45865b0f54",
".git/objects/bc/7e8b7df68594238f87f7a9752d9eeda5a28ccd": "cb759aa59ef8e8f50d97d105108bef3a",
".git/objects/c3/81f58d89ae35306560715f232489e7ad9f3d18": "b9f15b7a954b012d78d61c74eff1fe8f",
".git/objects/c3/e81f822689e3b8c05262eec63e4769e0dea74c": "8c6432dca0ea3fdc0d215dcc05d00a66",
".git/objects/c6/06caa16378473a4bb9e8807b6f43e69acf30ad": "ed187e1b169337b5fbbce611844136c6",
".git/objects/cb/a9be6ce94b0fd081f13bbf9c4a13f9dfef0870": "fd2d24a1425a366fcd3a912dafef527c",
".git/objects/d3/efa7fd80d9d345a1ad0aaa2e690c38f65f4d4e": "610858a6464fa97567f7cce3b11d9508",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d8/6d271d3c542554720a3fd1ead372fbf6076eea": "21fba939982d9ad905d262fd0f333cf1",
".git/objects/dc/ab1deb73035f6efa82566a824d7e99d0079189": "42178511b318ef1d237d867ca844f96a",
".git/objects/de/d15a1915170801a7f636c9089784b6d61eeed5": "10e6e38d676f72a42f86b9fcea701c25",
".git/objects/e1/9d45c273d9ab83181e8bad823a84a0f14bfaa4": "8e908265f7484caf0e5abcc73a67c1c7",
".git/objects/eb/95a73f02316534064de93fb09f0f766b7409aa": "4120b6909fdb8db021d512c899356fd5",
".git/objects/ec/361605e9e785c47c62dd46a67f9c352731226b": "d1eafaea77b21719d7c450bcf18236d6",
".git/objects/ef/0274de9543add9bac9d1d73965ad6881b6fc6e": "a581c07632f270bab6399a0e0ad03dea",
".git/objects/ef/d5bb1f4caf0e56a611e9f69c72847d7e862a14": "1628c86f37d4d373a3c9d446ba81fc34",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f6/6b19e257d6eec1d1f3b6845bafbe3cfd590adc": "48a9090f4fa2c4c86a20d6faa7bab754",
".git/objects/f9/0c90a338a892cb6066ee3b3640a395983ffaa1": "2a4dcf04953f4affb7478f31f7b7f591",
".git/objects/ff/39ea5b63878e81fd8a1e8720f6da9cb4631223": "bb0afcb0920af3f5c0284980d094ae68",
".git/objects/pack/pack-432dd3c3407d164889013b04865d9ba684e3831f.idx": "336ea5c5282a8a8e6ad37c61eb2b04f1",
".git/objects/pack/pack-432dd3c3407d164889013b04865d9ba684e3831f.pack": "800deaae9751c06013580d39787a9690",
".git/ORIG_HEAD": "4a72d974a4f278c483d1059ebf78547f",
".git/refs/heads/develop": "9265dc09188313d0574b25e5a08d435b",
".git/refs/heads/release": "2d5b0a8aa3da840d8b83882422645f81",
".git/refs/remotes/origin/develop": "a891dc8b86503b5116def2e2b4f9d6ca",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d4a99e7ae9f1f823f47c61d4fbed09cc",
".git/refs/remotes/origin/release": "2d5b0a8aa3da840d8b83882422645f81",
"assets/AssetManifest.bin": "df57dea646d2f9833aa8b51bd18fd69d",
"assets/AssetManifest.bin.json": "b6a17e12b37e8bfc6af2a1e2e8870ac3",
"assets/AssetManifest.json": "8c0a8356d4946dc71c8c18a3f92a7631",
"assets/AssetManifest.smcbin": "793af0d5fcaf1da519c3161c48e06a4b",
"assets/assets/icons/behance.svg": "35ad2d47e647d0b168e7707b2984c6b5",
"assets/assets/icons/check.svg": "272adae309c852fb7363766d857c119c",
"assets/assets/icons/download.svg": "628700a3031424d215a441fab2da1731",
"assets/assets/icons/dribble.svg": "d392567c5678d42472d2c7b766268101",
"assets/assets/icons/github.svg": "9226aa209923e38c0a6ddcb236e2bc68",
"assets/assets/icons/language.svg": "425d52495d3e27fff220fff90623915d",
"assets/assets/icons/linkedin.svg": "5b2195ddf9e879047dd8a163c4194920",
"assets/assets/icons/twitter.svg": "a4a0163fef48a4247a305528c07bc4fa",
"assets/assets/images/bg.jpeg": "c6449162dc3940daa640a43101cfd66c",
"assets/assets/images/IMG_7344.jpg": "bb74c3d7c6f5599d40c05a866b31ffd6",
"assets/assets/images/language.png": "62da0070436cd91181b267995365b216",
"assets/assets/images/language_2.png": "50089f9468f7991dbd11f1b8444db6f8",
"assets/assets/images/loading.gif": "e6da4217ea8dcab62274b50d528a7286",
"assets/assets/images/profile_photo.png": "641f7ae50585ad85001f3cee6f1c8a2e",
"assets/assets/pdf/SendHelp.pdf": "5585b62171cf27279a60189316679530",
"assets/assets/projects/bit_node/about.png": "f54cddf98f1ddd19b943c654f180d07b",
"assets/assets/projects/bit_node/file_share.png": "f37f24b8f17bdc956f2ce06c0cfc6721",
"assets/assets/projects/bit_node/find_files.png": "af0ca877975344b5c39cdef7dab26f80",
"assets/assets/projects/bit_node/settings.png": "6b2c380ed1b469a1e1e9d7420c2d94b8",
"assets/assets/projects/ferreteria/create_client.png": "3bb651b89c5d24f70f44f49bb93946d7",
"assets/assets/projects/ferreteria/search.png": "b5a72816b5d874df2ed309c2561d8284",
"assets/assets/projects/ferreteria/sell_menu.png": "619abba64aee8cfd4c24608a76f033a4",
"assets/assets/projects/lantern/c_flash.png": "d7cd4fc86ba61a6768da53d00cbaac5f",
"assets/assets/projects/lantern/c_general.png": "99f685b655325382be2a624774421ca8",
"assets/assets/projects/lantern/c_pantalla.png": "ee7106711cb3f404f6bf90e648261ec6",
"assets/assets/projects/lantern/f_intermitencia.png": "09b6a75557bb48258f35f9a2f17e1866",
"assets/assets/projects/lantern/lantern_off.png": "fbb24d6e5d4ec894425796090db83b1a",
"assets/assets/projects/lantern/lantern_on.png": "59d0848aac758f92f287cf9126a804ab",
"assets/assets/projects/local_city/categories/alcohol.png": "db18674b145b26514921e7a2eee673ca",
"assets/assets/projects/local_city/categories/alfajores.png": "8ebb0449409eb190944422fc77b281a6",
"assets/assets/projects/local_city/categories/bebidas.png": "147ee33007355b915fa500f5a6bb9ade",
"assets/assets/projects/local_city/categories/caramelos.png": "87912a939583e259050d2f62e15d4347",
"assets/assets/projects/local_city/categories/chocolates.png": "aa2d5a134e2487b41641603718588266",
"assets/assets/projects/local_city/categories/condimentos.png": "a6891601b20ddb099796f97c30006657",
"assets/assets/projects/local_city/categories/cosmeticos.png": "a00dcd0705cba25fbed1303a046d299b",
"assets/assets/projects/local_city/categories/enlatados.png": "8362b9dca761e283c1eec9e20897366f",
"assets/assets/projects/local_city/categories/fiambres.png": "fa1c71ddfada0459b47208745b02ef7e",
"assets/assets/projects/local_city/categories/fyv.png": "34ac97ba764f6c28eb5d675558cf868c",
"assets/assets/projects/local_city/categories/galletas.png": "5619860c691575dd3e1f038eb71eae30",
"assets/assets/projects/local_city/categories/higiene.png": "85d6429dc64235f3caa9e93c54df402b",
"assets/assets/projects/local_city/categories/infusiones.png": "5f2de9022e5192ad942c6c47273bc562",
"assets/assets/projects/local_city/categories/joyeria.png": "76a3f1ea3df12a1ceeea73a23cc3465f",
"assets/assets/projects/local_city/categories/jugos.png": "2d1443cc7c8d2fd67c206a19f1593ace",
"assets/assets/projects/local_city/categories/juguetes.png": "e318bdc1f3ee7c7c2122083f49fb62fc",
"assets/assets/projects/local_city/categories/lacteos.png": "34678fed4e95916b2c6109d26a6de511",
"assets/assets/projects/local_city/categories/limpieza.png": "58255bb6538f26697b45c671f9e17b89",
"assets/assets/projects/local_city/categories/ofertas.png": "75b0ce7732370e8ede5e2ee3ce3a2785",
"assets/assets/projects/local_city/categories/panaderia.png": "472fe2390595c444e8b33efe392e9f25",
"assets/assets/projects/local_city/categories/pastas.png": "9de29d8686a407f5bb48a4e55b399ba5",
"assets/assets/projects/local_city/categories/snacks.png": "a7e7809cc6aeea7104fd91d0c56a054f",
"assets/assets/projects/local_city/categories/tapers.png": "a1371410b2a6cf197bf7020228b80fd4",
"assets/assets/projects/local_city/categories/todos.png": "892c7fa31d85c1f798190aa232e2d924",
"assets/assets/projects/local_city/categories/vinos.png": "e4eb0c2b126087a517e53b1f20440a08",
"assets/assets/projects/local_city/categories_black/alcohol.png": "8014a67a9160d6f2d487c79d6efcd1ff",
"assets/assets/projects/local_city/categories_black/limpieza.png": "ecf263028adb1e69d1fc6f08a7b6a8bf",
"assets/assets/projects/local_city/categories_black/pastas.png": "81bd057fdc523ab2dd7080a0e21ede19",
"assets/assets/projects/local_city/categories_black/snacks.png": "e3cdd69145472d5043075bdf9fde6f8a",
"assets/assets/projects/local_city/images/alcohol.jpg": "2a4260d39c337eda4f2a642f98e1a7ec",
"assets/assets/projects/local_city/images/buger.png": "f06d38650ab7143c9fb2ba17c5b3abd9",
"assets/assets/projects/local_city/images/facebook_icon.jpg": "9dc93ecc98a83bb632e3d1c59b717172",
"assets/assets/projects/local_city/images/facebook_icon.png": "f983daf744d6e61f52fc6c9ecd43e617",
"assets/assets/projects/local_city/images/facebook_icon_white.png": "432875824c383fde0018fb00b0be7022",
"assets/assets/projects/local_city/images/google_icon.png": "0ae3468edf52a9acfff7580b0f1d8776",
"assets/assets/projects/local_city/images/google_icon_white.png": "e2bbad39aee443e043dce7d52da1fae7",
"assets/assets/projects/local_city/images/logo_login.png": "7c844158675e8d2a2214bbad4c3942e8",
"assets/assets/projects/local_city/images/logo_small.jpg": "f3e5d77a1db07697acd5681347a23a87",
"assets/assets/projects/local_city/images/lomito.jpg": "e24504fcb348b4d5a827bb18e1a3cd8d",
"assets/assets/projects/local_city/images/pizza.jpg": "bca420dca844fabee6d1a800a1e496e5",
"assets/assets/projects/local_city/images/pizza_pn.png": "83d99fc53aa178a8b835a95d1a115734",
"assets/assets/projects/tu_pedido_vd/custom_pop.jpg": "ea2c21072480826d002f229bed8b05bd",
"assets/assets/projects/tu_pedido_vd/v_comerciantes.jpg": "1b18915a8127252f73e397bee4c449d0",
"assets/assets/projects/tu_pedido_vd/v_comerciante_order_grid.jpg": "ace03c72245c385d9daa40dc0ad3b6f1",
"assets/assets/projects/tu_pedido_vd/v_comerciante_order_list.jpg": "5d808f2e456b4243085533ffadd2dd29",
"assets/assets/projects/tu_pedido_vd/v_confirm_order.jpg": "c705ca489bcb4ddc9b50ca0cf449c472",
"assets/assets/projects/tu_pedido_vd/v_login.jpg": "0d833d755cec88a182e345d73e6dbcca",
"assets/assets/projects/tu_pedido_vd/v_producto.jpg": "cc96cf09adbc4fbbf34960ec9f3b8b46",
"assets/assets/projects/tu_pedido_vd/v_select_categories_1.jpg": "b41a246be9101bc887c3feec36de089a",
"assets/assets/projects/tu_pedido_vd/v_select_categories_2.jpg": "7700b8bd8b884253156ef801256c75fb",
"assets/assets/projects/tu_pedido_vd/v_select_flavor.jpg": "97fb2d45d3913befff5e81ddee1c6adf",
"assets/assets/projects/tu_pedido_vd/v_select_ubication.jpg": "498aab7ae84d21698afd96507f2635a0",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "f9f9eca2e0a21d89160e6257d067729a",
"assets/NOTICES": "97db4230da544f50f6f2eb5f5fc53fdd",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "bcaf3ba974cf7900b3c158ca593f4971",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "26eef3024dbc64886b7f48e1b6fb05cf",
"canvaskit/canvaskit.js.symbols": "efc2cd87d1ff6c586b7d4c7083063a40",
"canvaskit/canvaskit.wasm": "e7602c687313cfac5f495c5eac2fb324",
"canvaskit/chromium/canvaskit.js": "b7ba6d908089f706772b2007c37e6da4",
"canvaskit/chromium/canvaskit.js.symbols": "e115ddcfad5f5b98a90e389433606502",
"canvaskit/chromium/canvaskit.wasm": "ea5ab288728f7200f398f60089048b48",
"canvaskit/profiling/canvaskit.js": "e275cb040a1d217b0f8f54b8fbd2ef52",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"canvaskit/skwasm.js": "ac0f73826b925320a1e9b0d3fd7da61c",
"canvaskit/skwasm.js.symbols": "96263e00e3c9bd9cd878ead867c04f3c",
"canvaskit/skwasm.wasm": "828c26a0b1cc8eb1adacbdd0c5e8bcfa",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "4b2350e14c6650ba82871f60906437ea",
"flutter_bootstrap.js": "12216f4d68d0f1ec4e9931dd2a19369a",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "1112f07ddac096ac7a2a9ed1a5f6effc",
"/": "1112f07ddac096ac7a2a9ed1a5f6effc",
"main.dart.js": "bd08a2656168d39450b7b671b4499964",
"manifest.json": "5ab1f289992d40726806b3fe808428d9",
"version.json": "8348913928bf99adb17e6d028574ba01"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
