import { Heart, Utensils, Stethoscope, BookOpen, Users, Droplet, Flower2 } from 'lucide-react';
export const image = (id, w=900) => `https://images.unsplash.com/${id}?auto=format&fit=crop&w=${w}&q=85`;

export const services = [
  { icon: Utensils, title: 'अन्न सेवा', desc: 'जरूरतमंद परिवारों को भोजन सहायता', color: 'orange', img: image('photo-1547592180-85f173990554', 650) },
  { icon: Stethoscope, title: 'स्वास्थ्य सेवा', desc: 'निःशुल्क स्वास्थ्य शिविर और चिकित्सा सहायता', color: 'teal', img: image('photo-1576091160399-112ba8d25d1d', 650) },
  { icon: BookOpen, title: 'शिक्षा सहायता', desc: 'बच्चों की शिक्षा और जरूरी सामग्री', color: 'blue', img: image('photo-1503676260728-1c00da094a0b', 650) },
  { icon: Users, title: 'बुजुर्ग सेवा', desc: 'सम्मान, देखभाल और आवश्यक सहयोग', color: 'purple', img: image('photo-1511632765486-a01980e01a18', 650) },
  { icon: Heart, title: 'कन्या विवाह', desc: 'आर्थिक रूप से कमजोर परिवारों की मदद', color: 'pink', img: image('photo-1519741497674-611481863552', 650) },
  { icon: Droplet, title: 'रक्तदान', desc: 'जीवन बचाने के लिए रक्तदान अभियान', color: 'red', img: image('photo-1615461066841-6116e61058f4', 650) },
  { icon: Flower2, title: 'मंदिर एवं संस्कृति', desc: 'धार्मिक और सांस्कृतिक सेवा कार्य', color: 'gold', img: image('photo-1604608672516-8d7c6e2b7c3a', 650) }
];

export const activities = [
  { date: '12 SEP', title: 'गाँव में खाद्य सामग्री वितरण', location: 'कानपुर, उत्तर प्रदेश', img: image('photo-1593113598332-cd288d649433', 650) },
  { date: '08 SEP', title: 'निःशुल्क स्वास्थ्य शिविर', location: 'प्रयागराज, उत्तर प्रदेश', img: image('photo-1576091160550-2173dba999ef', 650) },
  { date: '03 SEP', title: 'छात्रों के लिए शिक्षा सामग्री', location: 'वाराणसी, उत्तर प्रदेश', img: image('photo-1509062522246-3755977927d7', 650) },
  { date: '28 AUG', title: 'वृद्धाश्रम में सेवा कार्य', location: 'लखनऊ, उत्तर प्रदेश', img: image('photo-1511632765486-a01980e01a18', 650) }
];

export const campaigns = [
  { tag: 'शिक्षा', title: 'बच्चों की शिक्षा में नई उम्मीद', desc: 'जरूरतमंद बच्चों को किताबें, स्टेशनरी और सीखने के संसाधन उपलब्ध कराने में सहयोग करें।', target: '₹2,50,000', raised: '₹1,37,500', percent: 55, img: image('photo-1503676260728-1c00da094a0b', 900) },
  { tag: 'अन्न सेवा', title: 'हर जरूरतमंद तक भोजन', desc: 'भोजन सहायता के जरिए परिवारों तक जरूरी राहत और सम्मान पहुँचाने में मदद करें।', target: '₹1,50,000', raised: '₹86,400', percent: 58, img: image('photo-1593113598332-cd288d649433', 900) },
  { tag: 'स्वास्थ्य', title: 'चिकित्सा सहायता अभियान', desc: 'जरूरतमंद लोगों के लिए चिकित्सा सहायता और स्वास्थ्य जागरूकता को बढ़ावा दें।', target: '₹3,00,000', raised: '₹1,20,000', percent: 40, img: image('photo-1576091160399-112ba8d25d1d', 900) }
];

