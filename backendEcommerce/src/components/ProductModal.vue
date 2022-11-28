<template>
    <div>
        
    </div>
</template>

<script setup>

function closeModal(){
    show.value=false;
    emit('close');
}
function onSubmit(){
    loading.value=true;
    if(product.value.id){
        store.dispatch('updateProduct', product.value)
        .then(res =>{
            loading.value=false;
            if(res.status ===200){
                //TODO Show Notification
                store.dispatch('getProducts');
                closeModal();
            }
        })
    }else{
        store.dispatch('createProduct', product.value)
        .then(res =>{
            loading.value=false;
            if(res.status ===200){
                //TODO Show Notification
                store.dispatch('getProducts');
                closeModal();
            }
        })
    }
}
</script>

<style lang="scss" scoped>

</style>