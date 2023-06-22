// /*---------------------------------------------------------------------------------------------
//  *  Copyright (c) Atawaale Child Support Uganda. All rights reserved.
//  *  Licensed under the MIT License. See License.txt in the project root for license information.
//  *--------------------------------------------------------------------------------------------*/

// import * as Dom from "../../base/dom"
// import sendMailFactory from "sendmail";


// /**
//  * @@@@@@--BackEnd
//  */


// /**
//  * Auto Initialized with default Options
//  */

// const emailProvider = sendMailFactory({})


// /**
//  * This is the contact service(Sending Emails) apply in the controllers of the pages that need the contact service
//  *
//  * while removing their original implmentation of the contact.js & contact.php because we don't need these ones
//  *
//  *
//  * @usage
//  *
//  * @@test-> validation is True
//  *
//  * class HomeController {
//  *
//  *
//  *  async init(){
//  *
//  *      //like this to enable testing with various email addresses simultaneously
//  *
//  *      const emailContactService = new ContactService("atawalechilduganda@gmail.com")
//  *  }
//  *
//  * }
//  */

// export class ContactService {


//     //form-action
//     /**
//      * Maintain Strong References to the Dom Elements
//      */
//     private mainForm: HTMLFormElement | undefined = undefined;
//     private successOrErrorContainer: HTMLElement | undefined = undefined;



//     //value entries

//     /**
//      * Maintain Strong References to the Dom Elements
//      */
//     private nameInputValue: HTMLInputElement | undefined = undefined;
//     private emailInputValue: HTMLInputElement | undefined = undefined;
//     private subjectInputValue: HTMLInputElement | undefined = undefined;
//     private messageInputContainer: HTMLInputElement | undefined = undefined;
//     private submitButton: HTMLElement | undefined = undefined;



//     /**
//      * The Email we wish to send to (the company Email)
//      * @param __email__
//      */
//     constructor(public __email__: string) {
//         this.init();
//     }



//     /**
//      * --------------------------------------------------------
//      *
//      * Startup For the contact Service:
//      *
//      * this should remain private for auto Initializing on individual Pages
//      * ---------------------------------------------------------
//      *
//      */

//     private init() {
//         this.createServiceElementLayout();
//         this.registerListeners();
//     };


//     private get nameValue() {
//         return this.nameInputValue!.value;
//     };

//     private get emailValue() {
//         return this.emailInputValue!.value;
//     };

//     private get subjectValue() {
//         return this.subjectInputValue!.value;
//     };

//     private get messageValue() {
//         return this.messageInputContainer!.value;
//     };

//     private setButtonState(isDisabled: boolean) {
//         if (isDisabled) {

//             if (this.submitButton) {
//                 this.submitButton.setAttribute("disabled", String(true));
//             }

//         } else {
//             if (this.submitButton) {
//                 this.submitButton.setAttribute("disabled", String(false));
//             }

//         }
//     }



//     /**
//      * Query All Elements because this will keep them in the dom Scope longer for
//      * continous rendering
//      */

//     private createServiceElementLayout() {

//         this.mainForm = Dom.$("#contactForm")! as HTMLFormElement;
//         this.successOrErrorContainer = Dom.$("#success")

//         this.nameInputValue = Dom.$("input#name")! as HTMLInputElement;
//         this.emailInputValue = Dom.$("input#email")! as HTMLInputElement;
//         this.subjectInputValue = Dom.$("input#subject")! as HTMLInputElement;
//         this.messageInputContainer = Dom.$("textarea#message")! as HTMLInputElement;
//         this.submitButton = Dom.$("#sendMessageButton")! as HTMLButtonElement;

//     };

//     /**
//      * Here we send the user content to our email
//      */

//     private async createEmailSpoolService() {

//         emailProvider({
//             to: this.__email__, // Company Email
//             from: this.emailValue,
//             subject: this.subjectValue,
//             html: `You have received a new message from your Atawaale Child Support contact form.\n\n"."Here are the details:\n\nName: ${this.nameValue}\n\n\nEmail: ${this.emailValue}\n\nSubject: ${this.subjectValue}\n\nMessage: ${this.messageValue}`
//         }, (error, reply) => {

//             if (error) {


//                 if (this.mainForm) {

//                     //dispatch event because we dont want to croward this scope
//                     this.mainForm.dispatchEvent(new CustomEvent("email-failure"))
//                 }
//             } else {
//                 if (this.mainForm) {
//                     this.mainForm.dispatchEvent(new CustomEvent("email-sucess"))
//                 }
//             }
//         })
//     }

//     /**
//      * Reset the Forom
//      */

//     private requestFormReset() {
//         if (this.mainForm) {
//             this.mainForm.reset();
//         }
//     }


//     private clearSuccessOrErrorContainer() {
//         if (this.successOrErrorContainer) {
//             this.successOrErrorContainer.innerHTML = ``;
//         }
//     }

//     /**
//      *
//      * Display the succes or error containers in accordance to the events emitted
//      */

//     private displaySuccessOrErrorContainer(isSuccess: boolean) {
//         if (isSuccess && this.successOrErrorContainer) {
//             this.successOrErrorContainer.insertAdjacentHTML("afterbegin", `
//                 <div class='alert alert-success'>
//                     <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
//                     <strong>Your message has been sent. </strong>
//                 </div>
//             `);

//             //reset the form
//             this.requestFormReset();


//             setTimeout(() => {
//                 this.setButtonState(false)
//             }, 1000)
//         } else {

//             if (this.successOrErrorContainer) {

//                 this.successOrErrorContainer.insertAdjacentHTML("afterbegin", `
//                 <div class='alert alert-danger'>
//                     <button type='button' class='close' data-dismiss='alert' aria-hidden='true'>&times;</button>
//                     <strong>Sorry ${this.nameValue}, it seems that our mail server is not responding. Please try again later! </strong>
//                 </div>
//             `);

//                 //reset the form
//                 this.requestFormReset();
//             }
//         }
//     };


//     /**
//      * Register listeners
//      */

//     private registerListeners() {
//         if (this.mainForm) {

//             /**
//              * We dont attach a click listener to the button because its type is a submit
//              * button thus the form will listen for us the event
//              */

//             this.mainForm.addEventListener("submit", () => {
//                 this.createEmailSpoolService()

//             })

//             /**
//              * Listen for failed occurrences
//              */
//             this.mainForm.addEventListener("email-failure", () => {
//                 this.displaySuccessOrErrorContainer(false)

//             });

//             /**
//              * Listen for success occurences
//              */
//             this.mainForm.addEventListener("email-sucess", () => {
//                 this.displaySuccessOrErrorContainer(true)
//             });


//         };

//         if (this.nameInputValue) {
//             this.nameInputValue.addEventListener("focus", () => {
//                 this.clearSuccessOrErrorContainer()
//             })
//         }


//     }


// };