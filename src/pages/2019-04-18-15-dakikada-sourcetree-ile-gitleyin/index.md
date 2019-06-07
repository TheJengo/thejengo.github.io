---
path: '/15-dakikada-sourcetree-ile-gitleyin'
date: '2019-04-18'
title: '15 Dakikada Source Tree Ile Gitleyin'
tags: ['SourceTree','Atlassian','TheJengo','Cengiz CEBECİ','Git','Git GUI']
excerpt: 'SourceTree vs'
featuredImage: './media/126c84d5adacc0b820e2e44187b56a15.png'
language: 'tr/TR'
---

SourceTree Nedir?
-----------------
Tanıtım
-------

SourceTree, Atlassian Inc. tarafından geliştirilen Git yönetimi üzerine
geliştirimiş bir masaüstü uygulamasıdır. SourceTree ile BitBucket, GitHub,
GitLab, Stash gibi diğer Git eko sistemleri üzerindeki Git Repository’lerinizi
yönetmeyi kolaylaştıran uygulamadır.

Amaçları
--------

SourceTree’nin en temel amaçları:
-   Git Kullanımını Kolaylaştırmak,
-   Repository Yönetimini Kolaylaştırmak,
-   Değişiklikleri Görselleştirmek,
-   Geliştirici Deneyimini Arttırmak

![SourceTree logosu](./media/126c84d5adacc0b820e2e44187b56a15.png)

Artıları/Eksileri
-----------------

| Artıları | Eksileri                      |
|----------|-------------------------------|
| Bedava   | Piyasada yeni daha henüz v3.0 |
-   BitBucket ile harika entegrasyon
-   Yeni başlayanlar için basit
-   Uzmanlar için güçlü
-   Visual Studio Team Services Desteği
-   Mercurial Desteği

Rakipleri
---------

SourceTree’nin rakipleri oldukça fazla ve bu rakiplerin en başbelası olan iki
rakipten birisi GitHub Desktop ve diğeri de GitKraken. GitHub Desktop
popülaritesi ile ön plana çıkarken branchler için görselleştirme oluşturmaması
ve stash desteği vermemesi yüzünden biraz eksiye düşsede bu açıklarını
GitKraken’in oldukça iyi kapattığını ve SourceTree’ye çok büyük taş çıkardığını
belirtmek gerektir.

SourceTree Nasıl İndirilir ve Kurulur?
======================================

[İndirme Linki](https://product-downloads.atlassian.com/software/sourcetree/windows/ga/SourceTreeSetup-3.0.12.exe)
son sürümünü (3.0.12) indirebilirsiniz. MacOs ve Windows için ayrı sürümleri
bulunmaktadır. Bizler bu yazımızda Windows için uygun olanını indirip kuracağız
ve anlatacağız.

![İndirme sayfası](./media/ae9ab2f2e54162cb901e4f464879d94f.png)

SourceTree’yi bilgisayarınıza kurabilmeniz için:

-   Windows OS için Windows 7+,
-   Mac OS X için 10.11+

ve üzeri versiyonlarını kullanmanız gerekmetedir.

Kurulum Aşamaları:

1.  İndirmiş olduğunu çalıştırılabilir dosyayı(Windows için .exe’yi MacOS için
    DMG’yi) çalıştırınız.

![Kurulum Ekranı](./media/bb6a33c1711c054d75e75b4d33127402.png)

Sahip oluduğunuz olduğunuz Atlassian veya BitBucket hesabı ile kayıtlanmanız
gerekiyor. BitBucket Hesabım olduğu için sağdaki seçeneği seçtiğimde aşağıdaki
işlemler bütününü gerçekleştirmem gerekti.

![Bekleme Ekranı](./media/66d2635f750f9e8110c465aba6948765.png)

![Açılan Giriş Ekranı (Google ile devam etmiş bulunmaktayım)](./media/072d800bedf83b321f8a1129a303e939.png)

![Yetkileri Onaylama Sayfası](./media/f7083ad2b1a188ae3fa6bf6e9bb7dc2b.png)

![Kayıt Onay Sayfası](./media/40486e9e777471b275c269b5e9fe1cd0.png)

![Araç Seçimleri ve Ayarlar Ekranı](./media/8dbba4c1cc3499053437984384db412f.png)

Bu ekranda gelişmiş ayarlar altındaki CRLF gelen kod içerisindeki satır
sonlarını otomatik anlamlandırması için seçilmiştir. Diğer seçenek iste genel
geçer olarak bazı dosyalar vardır görmezden gelinebilecek ve her işletim sistemi
kullanıcısına özel olarak dinamik bir şekilde üretilenler gibi.

![Yazar Bilgileri ve Verilerinizi Paylaşır Mısınız? Ekranı](./media/05b871ef87536c6d7b4f5ebe9c1ab7c0.png)

![SSH Anahtarınız var mı? sorusu ekranı](./media/45bd37f00097c8508510b0ed1c46585f.png)

Ben BitBucket hesabımı Remote olarak eklediğin için bu ekran NO diyerek
geçiyorum başka bir zaman ihtiyaç dahilinde SourceTree içerisinde bir tane
generate edebiliriz.

SourceTree Nasıl Kullanılır?
----------------------------
SourceTree Uygulamasını Tanıyalım
---------------------------------

SourceTree üzerinde her şey oldukça basit ve doğru bir şekilde konumlandırılmış
olduğu için erişimi ve kullanımı kolaydır.

![SourceTree Giriş Ekranı Yerel Repolarını Gösterir](./media/b6ca5acb12304971ad106f16b1e03faa.png)

![SourceTree Remote Repos](./media/3045dabd95a762d2a93a12f9e887d5ff.png)

Bu ekran üzerinde bağlanmış olduğunu Git hesaplarına(BitBucket, GitHub, GitLab,
Stash vs.) ait repoları görüntülüyor olacaksınız. Seçtiğiniz repoları kolayca
bilgisayarınıza clonelayabilir üzerinde çalışabilir ve git işlemlerini
gerçekleştirebilirsiniz.

![Clone](./media/a4b0f9878e313d8e1fd5491baa09cef3.png)

![Add](./media/68574f4ed9e990a5a9573101d6f09317.png)

![Create Tabları](./media/5c301bd45aff78a0bd732739a023fad5.png)

Ayrıca başka repolarıda kolayca klonlayabilir, bilgisayarınızdakileri
ekleyebilir, yeni bir tane oluşturabilir ve kullanabilirsiniz.

Bir Repo Clone’layalım
----------------------

Eğer Remote olarak bağlandıysanız tek yapmanız gereken *Remote*’ta bulunan
reponuzu’ı içerisinden seçmek ve devam etmek. Daha sonra *Clone Tab*’ı
içerisindeki alanların otomatik bir şekilde doldurulmuş olduğunu göreceksiniz.
Eğer giriş işlemleriniz yapılmamışsa BitBucket, GitHub veya GitLab hesap
bilgilerinizi girmeniz istenecektir. Bu bilgileri ve aşağıdaki gibi bir ekran
sizleri karşılayacaktır. Giriş işlemlerinin ardından aşağıda aktif olmayan
“**Clone**” düğmesi aktif olacak ve klonlama işlemlerinize devam edebileceksiniz.

![Klonlama](./media/30936e7672f4367ada0fdc9c85e56460.png)

![Klonlama](./media/c7254fc8d76f435887752fa285b24b9e.png)

Repo Yönetimi
-------------

![Repo Yönetim Ekranı](./media/2c6e8c30b8d17d6fa127701b92ab7a92.png)

Bu ekran içerisinden Commit atabilir, kodlarınızı stashleyebilir, branchlerinizi
yönetebilir veya görüntüleyebilir, diğer commitleri, pull veya fetch edebilir,
branch ve merge işlemleri yapabilirsiniz. Kısacası ihtiyacınız olan tüm git
işlemlerini gerçekleştirebilirsiniz.

İşlemleri tanıyalım
-------------------

Proje/Repo ekranı sekmesi içerisinde bulunan üst menü düğmeleri ve işlevleri
yanlarında aşağıdaki tabloda verilmiştir.

| [Commit Düğmesi](./media/m1.png) | Göndermek üzere hazırlamış olduğunuz kodlar/dosyalar paketidir.                                                                                                                |
|--------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| [Pull Düğmesi](./media/m2.png) | Repo üzerinde başkaları tarafından değişiklik yapılmış kodların/dosyaların aktarılması.                                                                                        |
| [Push Düğmesi](./media/m3.png) | Hazırlanmış commit paketinin Repo’ya aktarılmasıdır.                                                                                                                           |
| [Fetch Düğmesi](./media/m4.png) | Repodaki tüm içeriği yakalar ve getirir.                                                                                                                                       |
| [Branch Düğmesi](./media/m5.png) | Yeni bir dallanma oluşturmaya veya silmeye yarar.                                                                                                                              |
| [Merge Düğmesi](./media/m6.png) | Dallandırılmış kodları/dosyaları/projeleri birleştirir.                                                                                                                        |
| [Stash Düğmesi](./media/m7.png) | Göndermek istemediğiniz kendinize sakladığınız ya da hazır olmayan kod parçacıkları/dosyalarınızdır.                                                                           |
| [Discard Düğmesi](./media/m8.png) | Yaptığınız değişiklikleri bir önceki branch noktasına geri alır.                                                                                                               |
| [Tag Düğmesi](./media/m9.png) | Commitinize etiket eklemenizi veya silmenizi sağlar.                                                                                                                           |
| [Git-Flow Düğmesi](./media/m10.png) | Git branchlerinizi yönetmeye yarar, Yeni Bir Özellik, Yeni Bir Versiyon Yayınlama, Hotfix veya Diğer Aksiyonlarınızı yönetmeye yarayan çok kullanışlı ve güzel bir özelliktir. |
| [Remote Düğmesi](./media/m11.png) | Reponuzun Remote’taki konumunu tarayıcınız üzerinde açar.                                                                                                                      |
| [Terminal Düğmesi](./media/m12.png) | Git terminalinizi açar.                                                                                                                                                        |
| [Explorer Düğmesi](./media/m13.png) | Reponuzun dosya konumunu açar.                                                                                                                                                 |
| [Settings Düğmesi](./media/m14.png) | Repo ve Repo üzerindeki yönetim ayarlarınızı açar.                                                                                                                             |

Commit ve Push İşlemi
---------------------

![Our First Commit](./media/8f77dc5e089d544bedb117d74bc0cd9a.png)

Unstaged dosyalarınızı yöneterek projemizin dosyalarında yaptığımız değişikleri
commit edebiliriz.

![Branch-Master Görünümü](./media/dde94fafb8418907d32f1373cc735700.png)

Sağ alttaki *Commit* düğmesine bastıktan sonra commitimiz loglanır ve branchine
ait olan yere düşer ve buradan branch ve master seçimi yapılarak *Push* etmeye
hazır hale gelir buradan sonra yapılacak tek şey yukarıdaki *Push* düğmesine
basmak olacaktır ve ta da kodunuz Reponuza *Push* edilmiş olacaktır.

![BitBucket Projec Kaynak Ekranı](./media/407a0b170ec19c84ba4f0c15c544d6c9.png)

Gördüğünüz gibi her şey işte bu kadar basit projemize dair kodlarımız sisteme
yüklenmiş ve diğer proje üyeleri tarafından ulaşılabilir hale gelmiş
bulunmaktadır. Bu noktadan sonra SourceTree ile yapacağınız tüm işlemler
sizlerin Git yeteneklerinize/bilgilerinize kalmıştır.

**S O N**