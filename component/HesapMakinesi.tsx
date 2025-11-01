import React, {useState} from "react";
import {View, Text, TextInput, TouchableOpacity, StyleSheet}
from "react-native";

export default function HesapMakinesi() {
    //sayıların ve sonucun tutulduğu state'ler
    const[sayi1, setSayi1] = useState(""); //1. sayı
    const[sayi2, setSayi2] = useState(""); //2. sayı
    const[sonuc, setSonuc] = useState< number>(0); //sonuç
    //dört işlem fonk.
    const topla = () => setSonuc(Number(sayi1) + Number(sayi2));
    const cikar = () => setSonuc(Number(sayi1) - Number(sayi2));
    const carp = () => setSonuc(Number(sayi1) * Number(sayi2));
    const bol = () => {
        if(Number(sayi2)===0) {
            setSonuc(NaN); //sıfıra bölüm kontrolü
        }
        else {
            setSonuc(Number(sayi1) / Number(sayi2));
        }
    };

//tüm alanları sıfırlama
const sifirla = () => {
    setSayi1("");
    setSayi2("");
    setSonuc(0);
};
return (
    <View style={stiller.kapsayici}>
        <Text style={stiller.baslik}>Hesap Makinesi</Text>

        {/*1. sayı girişi*/}
        <TextInput
        style={stiller.giris}
        placeholder="1. sayıyı giriniz"
        keyboardType="numeric"
        value={sayi1}
        onChangeText={setSayi1}
        />

        {/*2. sayı girişi*/}
        <TextInput
        style={stiller.giris}
        placeholder="2. sayıyı giriniz"
        keyboardType="numeric"
        value={sayi2}
        onChangeText={setSayi2}
        />
        {/* Butonların tutulduğu alan*/}
        <View style={stiller.butonAlani}>
            <TouchableOpacity style={[stiller.buton, stiller.topla]}
            onPress={topla}>
                <Text style={stiller.butonYazi}>+</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[stiller.buton, stiller.cikar]}
            onPress={cikar}>
                <Text style={stiller.butonYazi}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[stiller.buton, stiller.carp]}
            onPress={carp}>
                <Text style={stiller.butonYazi}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity style={[stiller.buton, stiller.bol]}
            onPress={bol}>
                <Text style={stiller.butonYazi}>÷</Text>
            </TouchableOpacity>
        </View>
    
    {/*Sonuç alanı*/}
    <Text style={stiller.sonucMetni}>
        {sonuc !== null ? (isNaN(sonuc) ? "Sıfıra bölünemez!" :
        `Sonuç: ${sonuc}`) : "Sonuç bekleniyor..."}
    </Text>
    {/* sıfırlama butonu*/}
    <TouchableOpacity style={[stiller.buton, stiller.sifirla]}
    onPress={sifirla}>
        <Text style={stiller.butonYazi}>Sıfırla</Text>
    </TouchableOpacity>
 </View>
);
}
const stiller = StyleSheet.create({
    kapsayici: {
      backgroundColor: "#fff",        // Arka planı beyaz yapar.
      borderRadius: 20,               // Kenarlara 20 birimlik yuvarlaklık uygular.
      padding: 25,                    // İç boşluk (padding) 25 birim olarak ayarlar.
      width: "85%",                   // Genişliği ekranın %85'i kadar yapar.
      alignItems: "center",           // İçeriği yatayda ortalar.
    },
    baslik: {
      fontSize: 22,                   // Yazı boyutunu 22 birim yapar.
      fontWeight: "700",              // Yazıyı kalın (bold) yapar.
      color: "#007AFF",               // Yazı rengini iOS mavi tonuna ayarlar.
      marginBottom: 20,               // Alt kenarda 20 birim boşluk bırakır.
    },
    giris: {
      width: "100%",                  // Genişliği %100 yapar (tam ekran).
      borderWidth: 1,                 // 1 birimlik kenarlık kalınlığı ekler.
      borderColor: "#ccc",            // Kenarlık rengini açık gri yapar.
      borderRadius: 10,               // Kenarlara 10 birimlik yuvarlaklık uygular.
      padding: 10,                    // İç boşluk 10 birim olarak ayarlar.
      fontSize: 18,                   // Yazı boyutunu 18 birim yapar.
      marginVertical: 8,              // Dikeyde (üst ve alt) 8 birim boşluk bırakır.
      textAlign: "center",            // Metni yatayda ortalar.
    },
    butonAlani: {
      flexDirection: "row",           // İçeriği yatayda sıralar (satır düzeni).
      justifyContent: "space-between", // İçerikler arasında eşit boşluk bırakır.
      width: "100%",                  // Genişliği %100 yapar.
      marginVertical: 20,             // Dikeyde 20 birim boşluk bırakır.
    },
    buton: {
      flex: 1,                        // Esnek genişlik; mevcut alanı eşit böler.
      alignItems: "center",           // İçeriği yatayda ortalar.
      paddingVertical: 12,            // Dikeyde 12 birim iç boşluk ekler.
      marginHorizontal: 5,            // Yatayda (sağ ve sol) 5 birim boşluk bırakır.
      borderRadius: 10,               // Kenarlara 10 birimlik yuvarlaklık uygular.
    },
    butonYazi: {
      fontSize: 22,                   // Yazı boyutunu 22 birim yapar.
      fontWeight: "700",              // Yazıyı kalın (bold) yapar.
      color: "#fff",                  // Yazı rengini beyaz yapar.
    },
    topla: {
      backgroundColor: "#34C759"      // Arka planı yeşil yapar (toplama butonu için).
    },
    cikar: {
      backgroundColor: "#FF3B30"      // Arka planı kırmızı yapar (çıkarma butonu için).
    },
    carp: {
      backgroundColor: "#FF9500"      // Arka planı turuncu yapar (çarpma butonu için).
    },
    bol: {
      backgroundColor: "#007AFF"      // Arka planı mavi yapar (bölme butonu için).
    },
    sifirla: {
      backgroundColor: "#8E8E93",     // Arka planı gri yapar (sıfırlama butonu için).
      paddingHorizontal: 40,          // Yatayda 40 birim iç boşluk ekler.
      marginTop: 10,                  // Üst kenarda 10 birim boşluk bırakır.
    },
    sonucMetni: {
      fontSize: 20,                   // Yazı boyutunu 20 birim yapar.
      fontWeight: "600",              // Yazıyı orta-kalın yapar.
      marginBottom: 10,               // Alt kenarda 10 birim boşluk bırakır.
    },
    });