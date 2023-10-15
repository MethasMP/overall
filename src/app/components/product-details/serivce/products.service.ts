import { Injectable } from '@angular/core';
import { productsType } from './product-details.model';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {


  products_list: productsType = [
    {p_id: 1,p_type:'กาแฟ',p_name: "เอสเปรสโซ่",p_detail: "หัวกาแฟรสชาติเข้มข้น เสิร์ฟด้วยแก้วขนาดเล็ก 3.5 ออนซ์",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/5e4ec4baf5004217bce8e054231234fc.png"},
    {p_id: 2,p_type:'กาแฟ',p_name: "อเมซอน",p_detail: "กาแฟดำรสชาติเข้มข้น",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e0d41f6f6a194731a96ac88b0aedbd81.png"},
    {p_id: 3,p_type:'กาแฟ',p_name: "อเมซอน เอ็กซ์ตร้า",p_detail: "กาแฟเย็นเข้มด้วยรสเอสเพรสโซ 2 เท่า",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/8c0c70e1b5a84f8dbd1f62fa3f3355c1.png"},
    {p_id: 4,p_type:'กาแฟ',p_name: "แบล็คคอฟฟี่น้ำผึ้ง",p_detail: "กาแฟดำเย็น ผสมน้ำผึ้งธรรมชาติ รสหวานละมุน",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/b81ca7d894a94cbd90bc52019998e771.png"
  },
    {p_id: 5,p_type:'กาแฟ',p_name: "แบล็คคอฟฟี่น้ำผึ้งมะนาว",p_detail: "ความหอมหวานของน้ำผึ้งผสมกับความเปรี้ยวของมะนาวราดด้วยกาแฟ อร่อยเย็นสดชื่นไม่ซ้ำใคร",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/948b6138ae1241d896946974bb26e156.png"
  },
    {p_id: 6,p_type:'กาแฟ',p_name: "คาปูชิโน",p_detail: "คาปูชิโนเย็น กาแฟเย็น รสชาติปานกลาง  แต่งหน้าด้วยโฟมนม",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/bef840806a5d4a1bad860b6940843976.png"},
    {p_id: 7,p_type:'กาแฟ',p_name: "ลาเต้อเมซอน",p_detail: "กาแฟเย็น รสชาติอ่อนนุ่ม ผสานความละมุนจากนมสด",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/3491c9e4b364454aa8b49be69fa85d9d.png"},
    {p_id: 8,p_type:'กาแฟ',p_name: "มอคค่า",p_detail: "หัวกาแฟเข้มข้น ผสมช็อกโกแลตและนมสดร้อน ราดด้วยโฟมนมด้านบน รสชาติกลมกล่อม หอมกลิ่นช็อกโกแลต",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e94da5f89a0f44539f534bbced63740a.png"},
    {p_id: 9,p_type:'กาแฟ',p_name: "ไวท์ ช็อก มัคคิอาโต้",p_detail: "กาแฟเย็น หวานละมุน หอมนุ่มกลิ่นไวท์ช็อกโกแลต",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/5b0888205c4943e98b5bc79909413022.png"},
    {p_id: 10,p_type:'ชา',p_name: "ชานม",p_detail: "ชานมเย็น ชานมเย็นสูตรพิเศษ หวานมัน กลมกล่อม",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/0a8707642c7740cd83d203b823b9344c.png"},
    {p_id: 11,p_type:'ชา',p_name: "ชามะนาว",p_detail: "ชามะนาว ทำจากชาซีลอนแท้ผสมน้ำตาล เพิ่มรสชาติด้วยน้ำมะนาวส",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/b71895151ebf40ce99ebb5fad8e91223.png"},
    {p_id: 12,p_type:'ชา',p_name: "ชาเขียวนม",p_detail: "ชาเขียวนมปั่น ชาเขียวนมสดปั่นสูตรพิเศษ รสนุ่มนวลอย่างลงตัว",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/77a951fbe05349bb84073af484070142.png"},
    {p_id: 13,p_type:'ชา',p_name: "ชาเขียวน้ำผึ้งมะนาวเจลลี่",p_detail: "ชาเขียวน้ำผึ้งมะนาวเจลลี่ ชาเขียวเย็น ผสมน้ำผึ้งธรรมชาติและน้ำมะนาวสด ตกแต่งด้านบนเครื่องดื่มด้วยเจลลี่น้ำผึ้ง  ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/c8c765c573ae4cd1b4faa9c3be5f773a.png"},
    {p_id: 14,p_type:'เครื่องดื่มเพื่อสุขภาพ',p_name: "แบล็คทีฮันนี่",p_detail: "ความหอมของชาดำที่เป็นเอกลักษณ์ของ คาเฟ่ อเมซอน ผสานกับความหอม หวาน ของน้ำผึ้ง อร่อยชื่นใจ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/adafae3bdd274bdd8569970bb3d498ef.png"},
    {p_id: 15,p_type:'เครื่องดื่มเพื่อสุขภาพ',p_name: "มัทฉะลาเต้",p_detail: "ดื่มด่ำกับมัทฉะเกรดพรีเมี่ยม กลมกล่อมเต็มรสชาเขียวแท้ นุ่มละมุนด้วยนมสด อร่อยหอมโดนใจ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/1d8477aed17e405b9a0aa918f860be69.png"},
    {p_id: 16,p_type:'เครื่องดื่มเพื่อสุขภาพ',p_name: "ดาร์คช็อกโกแลต",p_detail: "ดื่มด่ำกับช็อกโกแลตเกรดพรีเมี่ยม ผสานกับความนุ่มของนมสด อร่อยเข้มข้นโดนใจ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/488bf5a7ab734bed8c3df027b205ea04.png"},
    {p_id: 17,p_type:'นม/ช็อกโกแลต',p_name: "นมสด",p_detail: "นมสดปั่น สดชื่น หวานมัน หอมกลิ่นนมสด",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/e8a3df71a2a0415a97ddf03ad573f9cd.png"},
    {p_id: 18,p_type:'นม/ช็อกโกแลต',p_name: "ช็อกโกแลต",p_detail: "ช็อกโกแลตปั่นสูตรพิเศษ รสชาติหวานมัน หอมกลิ่นช็อกโกแลต",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/9c03b41a77ac4c73bce56198721a011e.png"},
    {p_id: 19,p_type:'นม/ช็อกโกแลต',p_name: "สตรอเบอร์รี่ชีสเค้ก",p_detail: "เครื่องดื่มปั่นรสสตรอเบอร์รี่ หอมกลิ่นชีสเค้ก เคี้ยวเพลิดเพลินไปกับบัตเตอร์คุกกี้แสนอร่อย",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/447e62e4f6ad4b228d38e9f1c983446d.png"},
    {p_id: 20,p_type:'น้ำผลไม้ & สมูทตี้',p_name: "น้ำลิ้นจี่",p_detail: "น้ำลิ้นจี่ รสชาติเปรี้ยว หวานอย่างลงตัว ในเอกลักษณ์เฉพาะของผลไม้ไทย",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/26922d4e1b3146639545afe262b8acec.png"},
    {p_id: 21,p_type:'น้ำผลไม้ & สมูทตี้',p_name: "น้ำกีวี่ปั่น",p_detail: "น้ำกีวี่เข้มข้น หอม หวาน อมเปรี้ยว อร่อยสดชื่นโดนใจ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/0c5be98c424b46a3a7ddd328f3b79199.png"},
    {p_id: 22,p_type:'น้ำผลไม้ & สมูทตี้',p_name: "โยเกิร์ตสมูทตี้มิกซ์เบอรรี่",p_detail: "น้ำมิกซ์เบอรี่ผสมโยเกิร์ต หวาน อมเปรี้ยว อร่อยสดชื่นโดนใจ",p_img: "https://www.cafe-amazon.com/BackEnd/TempProducts/36f4a20e6f5a4221b00c0b8483872cda.png"},


    
  ]

  constructor() { }

  getAllproduct(){
    return this.products_list;
  }

  addComment(){
    return this.products_list;
  }
}
