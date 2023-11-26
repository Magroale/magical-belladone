<template>
    <div class="mt-5 pt-1 d-flex flex-column align-items-center justify-content-center">
        <div class="d-flex flex-column align-items-start justify-content-start ms-5 me-5"
            style="max-width: 70vh; text-align: justify;">
            <h1 style="color: #7b2052; font-size: 28px; font-family:'norwester';">
                Prices and Payment
            </h1>
            <p style="color: #7b2052;">{{ this.precioYpago }}</p>
        </div>

        <div class="d-flex flex-column align-items-start justify-content-start ms-5 me-5"
            style="max-width: 70vh; text-align: justify;">
            <h1 style="color: #7b2052; font-size: 28px; padding-top: 5%; font-family:'norwester';">
                Time frame
            </h1>
            <p style="color: #7b2052;">{{ this.timeFrame }}</p>
        </div>

        <div class="d-flex flex-column align-items-start justify-content-start ms-5 me-5"
            style="max-width: 70vh; text-align: justify;">
            <h1 style="color: #7b2052; font-size: 28px; padding-top: 5%; font-family:'norwester';">
                Delivery
            </h1>
            <p style="color: #7b2052;">{{ this.delivery }}</p>
        </div>

        <div class="d-flex flex-column align-items-start justify-content-start ms-5 me-5"
            style="max-width: 70vh; text-align: justify;">
            <h1 style="color: #7b2052; font-size: 28px; padding-top: 5%; font-family:'norwester';">
                Things I will NOT draw under any circumstances
            </h1>
            <p style="color: #7b2052;">{{ this.restricciones1 }}</p>
            <p style="color: #7b2052;">{{ this.restricciones2 }}</p>
            <p style="color: #7b2052;">{{ this.restricciones3 }}</p>
        </div>
        <div class="d-flex flex-column align-items-start justify-content-start ms-5 me-5"
            style="max-width: 70vh; text-align: justify;">
            <h1 style="color: #7b2052; font-size: 28px; padding-top: 5%; font-family:'norwester';">
                Cancellation & Refunds
            </h1>
            <p style="color: #7b2052;">{{ this.cancellations1 }}</p>
            <p style="color: #7b2052;">{{ this.cancellations2 }}</p>
            <p style="color: #7b2052;">{{ this.cancellations3 }}</p>
            <p style="color: #7b2052;">{{ this.cancellations4 }}</p>
            <p style="color: #7b2052;">{{ this.cancellations5 }}</p>
        </div>
    </div>
</template>
  
<script>


export default {
    name: 'HelloWorld',
    props: {
        msg: String
    },

    data() {
        return {
            precioYpago: "Payment must be made in advance and depending on your payment method, it will be charged in USD or MXN. While the illustration is in the sketch process, any changes will be free.",
            restricciones1: "Issues of discrimination/hatred towards race, gender, sex, sexuality, religion or any other group or individual.",
            restricciones2: "Adult themes such as sexual content or intense violence. - Non-consensual situations.",
            restricciones3: "Copyrighted characters (D*sney, N*ntendo, etc.).",
            timeFrame: "I typically work with multiple commissions in a 2 month queue when commissions open, so you can expect your commission to be delivered within that time period.",
            delivery: "Once finished, the client will receive a we transfer link where their commission will be completely delivered and finalized. If necessary I can also send the file to the email address provided by the client.",
            cancellations1: "If the commissioner decides to cancel, I will issue a refund equivalent to the amount of work not done.",
            cancellations2: "I can only give a refund if I haven't started cleaning the line-art yet. Please be sure of getting a commission before doing so!.",
            cancellations3: "If you need to cancel before sending information or payment, please let me know as soon as possible.",
            cancellations4: "I reserve the right to cancel the commission and issue a refund equivalent to the amount of work not done due to harassment, improper conduct, or poor communication*.",
            cancellations5: "*Poor communication includes not sending information/forms within a few days of claiming a slot (it's best if you can get back to me within 24 hours or let me know if you anticipate barriers to this), not sending payment when agreed upon, and being generally unreachable/unresponsive in such cases. I'm pretty flexible and will probably issue reminders or warnings because life happens and things come up, but I reserve the right to blacklist the commissioner if this is a recurring issue.",


        }
    }
}
</script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped></style>
  
  