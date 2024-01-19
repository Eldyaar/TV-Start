import React from 'react'
import { useForm } from 'react-hook-form'
import './form.css'

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

         if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
         }

         const responseData = await response.json();
         console.log('Ответ от сервера', responseData);
         
      } catch (e) {
         console.error('ошибка при отправке запроса', e);
      }
   }

   return (
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
   )
}

export default Form
