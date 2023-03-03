'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "fd81e240919e8831db30af0966549b89",
".git/config": "105ef234fd13316f348ccea8fcbe7b7e",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "b608fe52f270e083e1ff402eaa013ee7",
".git/HEAD": "cdc6e77564d392632d1d3162ecd18e1f",
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
".git/index": "2dbbe3d312d79d13abe5b1fae7c9fbe1",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "fbc2d097a7c2b8ffe1c073dad6eade59",
".git/logs/refs/heads/develop": "c6faf6144bdfc3d5dcd0a0fe486033ec",
".git/logs/refs/heads/release": "3a64087f8be0ec19024374a2cc3f2181",
".git/logs/refs/remotes/origin/develop": "750ee51484b2f2f2a89c9b538060bb9a",
".git/logs/refs/remotes/origin/HEAD": "d7021fc06820415e829ed96625e8e7a8",
".git/logs/refs/remotes/origin/main": "e1b055064cb8aadfb9768085145021dc",
".git/logs/refs/remotes/origin/release": "e18565810ddd3f789eca7a50a84dca1b",
".git/objects/00/872401d541499f41b800154c6bfa5c529f8e29": "16076fc3308dbaba6d9a780b8148708a",
".git/objects/00/d2c272e6d94ac1de96622a8267bdd1022d5461": "3391f73e993df7d8ea3e1aab6001c5d4",
".git/objects/01/7572601171da43c702ad08bcfedcd3157c4711": "c5921d6cd56de0d7581607a23f61af22",
".git/objects/03/5114bab93a7618e1e008bb0fe5819ed5947c17": "b281ea3b7f6d6d79b71572ea81d7326e",
".git/objects/06/4b76398aa8baf532c15f865734bc290f5d7d0d": "9c7a65498ca1726de5bfe087e25f2755",
".git/objects/0a/f8f85bf7317449eaf640329cf06bc286e1faa0": "aacfaa21746c06bc1d3193d3e37e7f48",
".git/objects/0e/d41579ccb9c34546aeb1afbea555c2e385ac6a": "53766a5c2b3681ee7653332fffcb7cf0",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/12/9dd7973622dda2cfef73fbee7bdd14067b78f6": "bd291dd4f3971dab29082b1bb81bea94",
".git/objects/14/5b369371d4aba2d63518dcb141a2e845f33d38": "b6008dc106bdd685d80bb06c79d63fe6",
".git/objects/15/9962b657e1b7e41094ac8c039db042b79e8c12": "d5ba9a661ff4508c1bf80dd260b27ece",
".git/objects/16/d1d6acd6c17dcfa4c475b1aaa4de2605e07cbc": "59d775fc1979516c2ceee46920f2ed09",
".git/objects/18/81b4b7813013d3f52abba1ae7e1666d0aa214d": "f3dc5af922ff624f12c0cc7faee92438",
".git/objects/1c/2df287b51503eb907ad643fde4aaa7f274cb33": "a302ee1d9f4a5eb765b7a73c5ae6fa44",
".git/objects/1f/bf35de901ca90b9c8e0df3b022e448b62075ee": "b28e2827012652a35816c942bfa9abf7",
".git/objects/20/0992b2a3e875ef05b31087990707953c8b6989": "3dd8706e4b1c3046d1c87ea7505edd2a",
".git/objects/20/1b330c3f6ac0bcc146c102483c3148f7acd51c": "e120242d2bdcbfde9e5dbd7010afd0a8",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/29/fa564baee55d5af4359bc8efa672aea8b069ce": "365b657999884e517d61bdc8f17a8632",
".git/objects/2b/98a7423e603ca666d1263f382c56e996740525": "f58a2ef058aaf2a4a2d7eee6eba3d220",
".git/objects/30/9cfcb62ca4f773d50ccdcf1e7a79d42a7500ab": "8b8d150f5a3493f9b678e339b31fb521",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/38/f804e0a1b3b6015a1e35ce4d02eeef56ba18c1": "ac2b7605d835aa27ded9dd510309afbc",
".git/objects/39/7036ab7b24849c999427fd65a22caecf96ac05": "e775eb46208eb7fab2e718afbead4b73",
".git/objects/3b/02dfc71e9451d9bcc85d415b6cb9acc1ec15c8": "32f2f379169ce4310fdb67b671449f89",
".git/objects/3b/089642d63264195674d4dd781612d06b625f62": "42f9740e57fa86cfb5eee706e5bb85b6",
".git/objects/3c/7b870b607d5698baf82ae16dd0d6d08279371a": "d3e451c01799b9f51c026a7625de808a",
".git/objects/3e/6e46e6b2c7e70228b114e800ccbbf8957c623c": "aacb58ef4c0c3207364f4dd3e0b9c655",
".git/objects/3e/c50cfc7004d4167338c7260c87d93fb91738ea": "216ee683471691b45a1f53ba8c6ded12",
".git/objects/40/ca00c354de3886cf41d135931c119845c8aaff": "4353483abebce6e799ccdf7296e9c379",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/44/323a1b722926a9b9f9b23149251279a3cd17c2": "5cbccade8124c055e0e7ea7d6f594186",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/49/e75e76dcfcbb74e3219f4c595d4e58a0bc76f7": "24dadc79f6a8f094ddcc83d480a01ad0",
".git/objects/4a/68c16bd50230b359786bfbdd16628fcc5860d9": "6cdb127138dbff2269937cc5d90dc4c3",
".git/objects/4b/54a133060c9c50f1b2c8114b6d57cdc1705e84": "a62eac53c2cc87f6258b68f8c50e0355",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4d/6f94961b657c5d432d2f0ceb3ba2761a8fa9af": "d8ec580a0eabfca73cb8e986aaf04f6b",
".git/objects/4e/2f4c8bfb1eebaf939a1bfea9a669a5125ba795": "ac4f24cfb1af72ee19857c4a8071b447",
".git/objects/53/f3e6b1259a4860cf1b05ed0e78522f01c917cf": "834265a8458641c8d9f3bec1731c8587",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/c59f7ff45189a79323bcdecddc5c24256aa9e9": "7ab8a7d05256a84beac8d2969d594ba9",
".git/objects/56/d0a462b09f1565a9365c3a589a280b6304c122": "0acef156a80f00903bc1871e20e7ed5b",
".git/objects/5b/4b6276a4b4de13a6a8df495c09c84df893feb5": "91a6d585db55daeefc016236c363baee",
".git/objects/60/2dc2d45675816a1cc3a2ef454636705a8c7985": "ae0f6004a291f67cb8dee999a7deb34e",
".git/objects/60/480ed97f7714fccbee29cea0ce7116d280c52f": "e125dac7979eedfb1b3e867b745f0e5b",
".git/objects/64/161623b928d20ba7e84db0e3387204f251bee2": "7c03650fb399218d24aafb588eaf067c",
".git/objects/68/058cc0aad6ac8a7ad2e65f5debcdcdf0cd8ec8": "b1243198b48a971f8c4751379c13727b",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6c/0244b5d0e4d07483636ccba6ed47072ee04d39": "31547d8cb8a7e1823b0576954d53fc29",
".git/objects/6e/895bf1426ecb6044641a50eb0c368c262d3f34": "6effc66d8cdfa7ce3777298cf8465abc",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/f867903fc2496876b0b21011d6e40475a4a495": "d5436f6ba56704accfbfd5718becd9ef",
".git/objects/78/df43e58124862ab856106a70dfad8dfc1dfdee": "ccb0265bce68522f37481d05e354acdf",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7a/bcc0a69fc22770b94f4fdf6ee5900ee7e0c73a": "ffe45024ec2cdf2fb053389aed505738",
".git/objects/7a/ed4888f7e3d04458f38ef972e47e9befc57c76": "fd969906ccad800e2c890e02f412d869",
".git/objects/7e/4a31f3bfb39a55408ee7dd9b9190ce7a431061": "656c6ce77e8449da1108deab7dba8ab4",
".git/objects/7f/d34b367b15c3f24ad769a5cc05702a6baa19e9": "1f09d7410185fb9942695d8b8cebc9bf",
".git/objects/82/b349301039f348952b9cba7133da5f8b368ae3": "c4a163166f94ba4d0439667b9046811d",
".git/objects/86/3263e592cde954e9090974c079bf63e230c279": "18b99e94c894bcb75b1d94cff03a387a",
".git/objects/88/83336887925dcc184f56b831c8a4cc5e9b1cb7": "c49ffdd5cf55dc62c94baa6d084b5fd1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/89/7932f24d76176a2deeba49acd63be759503f36": "dfcc3086cade22cd75bdfaa5c3cbdc56",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8b/ba944a00eea75f80966c70216f45dd0a8bd601": "b9c9be2230f8c18fd24cd0d60d53277b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/91/5b292f468ebbc35eaad30d21a24c281144301a": "5223be61ea15f807b02b1c23429d0e32",
".git/objects/92/c3a16fed2bf030ef6c521a22917d34748967f8": "6fd01b5bab771a7789289ab883ba246f",
".git/objects/96/41a6db956137b3e43455df417f6e2c4ef4ed42": "d12d62444fbe5c0d49680e1f3a7c135e",
".git/objects/96/5aff84def8ace5351f0ad479b30183b1fc9a01": "eac6040f6f3c30fe7696ae74cbd8932d",
".git/objects/9b/47731e44383920f92b149fc78a71663e70855f": "3b4f00437cbe211a83a47a46b95c0caf",
".git/objects/9b/5a10f0e2e6a2ee6de09ce5f5450e842389e2d9": "972ac69dfa6ef55f7a7d2d91eebfbc88",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a1/546c3b7c7ce57b4e6040b09c6369ca159c01b2": "4a749dec51523418a3c065475bcde10c",
".git/objects/a3/6ba4e3325a532cd181f887a4c40a2d8b5dd218": "5a057b91b9f2a002d4a802d9c02c4723",
".git/objects/a5/b755a7bbc2f15c209e01f1203a09f68b8afd3b": "57c0e4eec64673a4df93008f05d3dca0",
".git/objects/a6/367e2110f091d2c52654b90d4b98b2d74af730": "d3e235638453f18dca91f01dc3d6c7f7",
".git/objects/a6/afe7c1ce0b95c7a0bf4dfcf490d4b4b3bf11c6": "6d48dcc7ad09939c3254ac45882532ea",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ab/915743e29570ab74ab151b1b164866e937d982": "d7a5eebd6f1f84e93bdedc1ca224b0aa",
".git/objects/ac/ee5ccc40526440ea65f70fed26bdc9c0180af4": "9336f7af9225522c5ecc56cef5786270",
".git/objects/ad/8ccec0cc924cad5512529e115afae4b19f6191": "1d4e2c1e5d65b9c21237b2edec07e672",
".git/objects/ae/ce435708d9592ac0fcca86a1521cc260a58ade": "8804a81dd3df9b299d1d82b3b88048f7",
".git/objects/af/84f8319494971ef86a3188a7b4cb7e49ffec07": "683448264149d11c27f6fdb053cd7f68",
".git/objects/b1/46e8fdf4eb9467ffd54d389416c24bb969ad10": "1270ae1378c1bb5f0c504c436b5b47d5",
".git/objects/b2/d57c4334498d176ecf37a875b213530f1a6c24": "3ffe472967923a6d1a63a7ae2b17b38a",
".git/objects/b3/8a1e6236af738e0656859eba642ed5b4154220": "38d4f1a3d0749e017e83e7fa39219add",
".git/objects/b4/376f0b1e196b9e615d87373682672d09cdb46f": "cac4965e8bbf35246ffab250ce5892d7",
".git/objects/b5/3b32ecfa693cb5297b125378098e117f513b05": "29624ce4030350ee923102f487d35a64",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/c9e0820f393660611459895cb0df992ee2851f": "b85b5bd38b5aacee4fcdd1088d6b09e4",
".git/objects/be/8aacdbbf40aa56612d7fc65f3e32163d77b514": "f7e8e7ea93bce549d5b33baf3bef5859",
".git/objects/c3/88085d4efa28534f601f1600c7eaa9aedd659d": "dbaadf33947379a44b79582af3195019",
".git/objects/c9/2f0ea068f7af2348bfb27154cf39f8b9ad867c": "1b0d49c9dea4ab627e7075f1e705fbb1",
".git/objects/c9/8835aa919459f84d3fefc0da4353899240a1de": "9a2e47109e625c4b4c4e9ac6ddc0aa22",
".git/objects/d3/5de7eb4dc6242af25a624eefa3f3d65737e526": "82bc8926754c99cef8409c504f3081e0",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/db/b26952fa590678fabcbefa1a581e55b961b570": "05b7a4dabc415ba917b0f81e56a0de00",
".git/objects/df/a9e4ea07ffa63ab315ffdc36135cfb8a14c400": "739855bebe53871cffea3c46c01bd6ce",
".git/objects/e0/dbafb797d2ea2761949ea69c8597674e069d64": "fe27df7bfd5f6f0f470b8633325843b9",
".git/objects/e3/ad83a616d546b01e1312354138e18a8dfa1469": "a913611039ed6a759ff71059e63f868a",
".git/objects/e5/758c4531c7795f31e4161eac6104e338e72b3f": "26cbb8817f046e8ebb8ea09e295d1001",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e6/5e64a6b81d37172f931e2c49c02c0dc1d3275b": "88d30c7fbe0956addbbb2d37d793ff07",
".git/objects/e8/ebd22175eb1a13c526b7021ee734cd102ceead": "f2dbd863d298db4a106f8816213a720b",
".git/objects/e9/1ac978d12243c26ebfdad9b39bc3bbf368712d": "1dfaf561f780df07ecf9823bd4fabfc7",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/ee/efe54723bfee1eda1018eb50c627fb6c7f1c05": "efce88f2209dd29481d87c092b473f08",
".git/objects/f0/9724ee15803c60280996e9c8be4daffa18c4ea": "7a7615ceeaf21ca3c7fe3026105a54af",
".git/objects/f2/2360bf8d10534182f9560fe17ae3b73c277c5f": "c86119174ae1a6574c68c45b7c97bc78",
".git/objects/f7/5418a41add7244a3708a6b8ef3f86f77fffba8": "187a43da6952ae705f871c31e0a5a2c6",
".git/objects/f7/5bc3b56f9b49bb75745ff54df9ec93e20f641d": "5cf9016f68b41bc510bfa884a3113e16",
".git/objects/f8/13caa1675b11643e5c4062d54d3a86c97135c2": "51b37cf22ef7cb1e88a0ff580d52901d",
".git/objects/f9/93497670b57633efcd43656f21164e9e615ff9": "4943807d9bff8df6d965a3e96f7db926",
".git/objects/fd/18dd674a2f98a8c4b2726fb111e22b7ff0094e": "48b9bb9d176af5c49ad12ec604d358d8",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/ORIG_HEAD": "218d3940b9e0475c7876f8a759c044f1",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/develop": "cb8f7a39432eda8a6de9294585be2832",
".git/refs/heads/release": "7182490fc1682c86759c9d0355340ecd",
".git/refs/remotes/origin/develop": "cb8f7a39432eda8a6de9294585be2832",
".git/refs/remotes/origin/HEAD": "98b16e0b650190870f1b40bc8f4aec4e",
".git/refs/remotes/origin/main": "d4a99e7ae9f1f823f47c61d4fbed09cc",
".git/refs/remotes/origin/release": "7182490fc1682c86759c9d0355340ecd",
"assets/AssetManifest.json": "97846426f6e266848b0c64fbce6eafe0",
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
"assets/assets/images/profile_photo.png": "641f7ae50585ad85001f3cee6f1c8a2e",
"assets/assets/projects/bit_node/about.png": "f54cddf98f1ddd19b943c654f180d07b",
"assets/assets/projects/bit_node/file_share.png": "f37f24b8f17bdc956f2ce06c0cfc6721",
"assets/assets/projects/bit_node/find_files.png": "af0ca877975344b5c39cdef7dab26f80",
"assets/assets/projects/bit_node/settings.png": "6b2c380ed1b469a1e1e9d7420c2d94b8",
"assets/assets/projects/ferreteria/create_client.png": "3bb651b89c5d24f70f44f49bb93946d7",
"assets/assets/projects/ferreteria/search.png": "b5a72816b5d874df2ed309c2561d8284",
"assets/assets/projects/ferreteria/sell_menu.png": "619abba64aee8cfd4c24608a76f033a4",
"assets/assets/projects/lantern/c_flash.png": "788cf9db1648797e5b5be731cbb79a01",
"assets/assets/projects/lantern/c_general.png": "7cdc911aca60f2a9d1c2ed4564cd1474",
"assets/assets/projects/lantern/c_pantalla.png": "941010443c580509345699cf88749c05",
"assets/assets/projects/lantern/Intermitencia.png": "4da764ff8703811ba65e8bbdc6b41014",
"assets/assets/projects/lantern/LMD_A.png": "08b73eb663b1e2e1ec86d1d4c67ab891",
"assets/assets/projects/lantern/LMD_E.png": "9597edc02f93b38b3574e37a22f4ec8c",
"assets/assets/projects/lantern/widget_off.png": "4fccd90018500383b9ccc3204774d6c5",
"assets/assets/projects/lantern/widget_on.png": "745d8db7fd7373a558228d1f64e53865",
"assets/assets/projects/send_help/about.png": "800285037c7f1c189c5ee6410e9c73d6",
"assets/assets/projects/send_help/alertas.png": "53ed88322717f9b03139948704f15bdd",
"assets/assets/projects/send_help/configuracion.png": "5796a206985a412649d55248d3970e40",
"assets/assets/projects/send_help/contactos.png": "f1065dc03493dc8aada31bee70364be6",
"assets/assets/projects/send_help/mapa.png": "441b4a53efaebd3c2ca94f165189792c",
"assets/assets/projects/send_help/patrones.png": "57a39fb0647c8d872c190aea665e305d",
"assets/assets/projects/send_help/principal.png": "8819ff032422b21f55518a15e9d5a5ff",
"assets/FontManifest.json": "e024588c84b5d20cb7869d6f908130e8",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "65afe2e796cac618b938d55fd9bca7f0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/line_icons/lib/assets/fonts/LineIcons.ttf": "23621397bc1906a79180a918e98f35b2",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "51385025eb3fab70edf03a8e0a66f122",
"/": "51385025eb3fab70edf03a8e0a66f122",
"main.dart.js": "e65331280b3fa28ab7b086950c785cfa",
"manifest.json": "5ab1f289992d40726806b3fe808428d9",
"version.json": "8348913928bf99adb17e6d028574ba01"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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
