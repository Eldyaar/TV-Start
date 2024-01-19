import React from 'react'
import { useForm } from 'react-hook-form'
import './form.css'
<<<<<<< HEAD
=======
import { data } from 'browserslist'
import IconBfb from "../IconBfb/IconBfb";
import {useLanguage} from "../LanguageContext/LanguageContext";
import star from "../Contact/build.png";

>>>>>>> 357b45a890a48c5dc64e837d10cb21c0ae7ab4cb

const Form = () => {
   const { register, handleSubmit } = useForm({})

   // eslint-disable-next-line
   const onSubmit = async (data) => {
      try {
         const response = fetch("http://localhost:3000/applicationData", {
            method: "POST",
            headers: {
               'Content-type': 'application/json'
            },
            body: JSON.stringify(data)
         })

<<<<<<< HEAD
         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseData = await response.json();
         console.log('Ответ от сервера', responseData);
         
      } catch (e) {
         console.error('ошибка при отправке запроса', e);
      }
=======
   const submit = data => {
      console.log(data)
>>>>>>> 357b45a890a48c5dc64e837d10cb21c0ae7ab4cb
   }

   const { selectedLanguage } = useLanguage();

   return (
<<<<<<< HEAD
      <div className='application-form'>
         <div className='application-form-content'>
            <div className='application-form-content__desc'>
               <div className='application-form-content__desc-title'>
                  ПРИЕДЕМ, <br /> СНИМЕМ, <br /> ПОКАЖЕМ.
               </div>
               <p className='application-form-content__desc-subtitle'>
                  Закажите производство трансляции, и в ближайшее время с вами свяжется наш менеджер для уточнения деталей
               </p>
            </div>
            <form 
               onSubmit={handleSubmit(onSubmit)}
               className='application-form-content__form' 
               action="#"
            >
               <input {...register('activities')} placeholder='Мероприятие' type='text' />
               <input {...register('contact')} placeholder='Контактное лицо' type='text' />
               <input {...register('telephone')} placeholder='Телефон' type='tel' />
               <input {...register('gmail')} placeholder='E-mail' type='text' />
               <button className='application-form-content__form-btn'>Отправить заявку</button>
            </form>
         </div>
      </div>
=======
       <div>

          {selectedLanguage === "RU" &&
              <div>
                 <IconBfb/>
                 <div className='application-form'>
                    <div className='application-form-content'>
                       <div className='application-form-content__desc'>
                          <div className='application-form-content__desc-title'>
                             ПРИЕДЕМ, <br/> СНИМЕМ, <br/> ПОКАЖЕМ.
                          </div>
                          <p className='application-form-content__desc-subtitle'>
                             Закажите производство трансляции, и в ближайшее время с вами свяжется наш менеджер для
                             уточнения деталей
                          </p>
                       </div>
                       <form
                           onSubmit={handleSubmit(submit)}
                           className='application-form-content__form'
                           action="#"
                       >
                          <input {...register('activities')} placeholder='Мероприятие' type='text'/>
                          <input {...register('contact')} placeholder='Контактное лицо' type='text'/>
                          <input {...register('telephone')} placeholder='Телефон' type='tel'/>
                          <input {...register('gmail')} placeholder='E-mail' type='text'/>
                          <button className='application-form-content__form-btn'>Отправить заявку</button>
                       </form>
                    </div>
                 </div>
              </div>
          }

          {selectedLanguage === "EN" &&
              <div>
                 <IconBfb/>
                 <div className='application-form'>
                    <div className='application-form-content'>
                       <div className='application-form-content__desc'>
                          <div className='application-form-content__desc-title'>
                             COME, <br/> SHOOT, <br/> SHOW.
                          </div>
                          <p className='application-form-content__desc-subtitle'>
                             Order the production of the broadcast, and our manager will contact you shortly to clarify
                             the details.
                          </p>
                       </div>
                       <form
                           onSubmit={handleSubmit(submit)}
                           className='application-form-content__form'
                           action="#"
                       >
                          <input {...register('activities')} placeholder='Event' type='text'/>
                          <input {...register('contact')} placeholder='Contact Person' type='text'/>
                          <input {...register('telephone')} placeholder='Phone' type='tel'/>
                          <input {...register('gmail')} placeholder='E-mail' type='text'/>
                          <button className='application-form-content__form-btn'>Send</button>
                       </form>
                    </div>
                 </div>
              </div>
          }

       </div>
>>>>>>> 357b45a890a48c5dc64e837d10cb21c0ae7ab4cb
   )
}

export default Form
