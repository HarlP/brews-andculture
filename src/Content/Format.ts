/** 
 * Formatting functions
 * @function phoneNumber(0000000000 or +10000000000) format phone number (xxx) xxx-xxxx -- must be string to convert
 */

export default class Format{
     phoneNumber(phoneNumberString: string){
        let cleaned = ('' + phoneNumberString).replace(/\D/g, '')
        let match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/)
        if (match) {
          let intlCode = (match[1] ? '+1 ' : '')
          return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('')
        }
        return null;
      }
}
