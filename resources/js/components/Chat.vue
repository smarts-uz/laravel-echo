<template>
    <div class="py-12">
        <div class="max-w-7xl mx-auto sm:px-6 lg:px-8">
            <div class="bg-white overflow-hidden shadow-sm sm:rounded-lg">
                <div class="p-6 bg-white border-b border-gray-200">
                    <textarea name="" id="" cols="30" rows="10" readonly>{{ messages.join('\n') }}</textarea>
                    <hr>
                    <input type="text" v-model="textMessage" @keyup.enter="sendMessage">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data: () => ({
            messages: [],
            textMessage: ''
        }),
        mounted() {
            window.Echo.channel('chat')
            .listen('Message', ({message}) => {
                console.log(message)
                this.messages.push(message)
            })
        },
        methods: {
            sendMessage() {
                axios.post('/messages', {
                    body: this.textMessage
                }).catch((err) => {
                    console.log(err.response)
                });

                this.messages.push(this.textMessage)
                this.textMessage = ''
            }
        }
    }
</script>
