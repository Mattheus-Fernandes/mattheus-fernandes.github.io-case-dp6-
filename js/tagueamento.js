// Preencha este arquivo com qualquer código que você necessite para realizar a
// coleta, desde a biblioteca analytics.js, gtag.js ou o snippet do Google Tag 
// Manager. No último caso, não é necessário implementar a tag <noscript>.
// O ambiente dispõe da jQuery 3.5.1, então caso deseje, poderá utilizá-la
// para fazer a sua coleta.
// Caso tenha alguma dúvida sobre o case, não hesite em entrar em contato.

const menuListaContato = document.querySelector('.menu-lista-contato')
menuListaContato.onclick = function(evento) {
    evento.preventDefault();

    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'entre_em_contato',
        eventLabel: 'link_externo'
    });

    window.location = this.href
}

const menuListaDownload = document.querySelector('.menu-lista-download')
menuListaDownload.onclick = function(evento) {
    evento.preventDefault();

    ga('send', {
        hitType: 'event',
        eventCategory: 'menu',
        eventAction: 'download_pdf',
        eventLabel: 'download_pdf'
    });

    window.location = this.href
}

const cardMontadoras = document.querySelectorAll('.card-montadoras')
cardMontadoras.forEach((card)=> {
    card.onclick = function() {

        const titulo = card.querySelector('.card-title')
        const nomeConteudo = titulo.innerText

        ga('send', {
            hitType: 'event',
            eventCategory: 'analise',
            eventAction: 'ver_mais',
            eventLabel: nomeConteudo
        });
    }
})

const camposInput = document.querySelectorAll('input')
camposInput.forEach((input)=> {
    input.onblur = function(evento){
        ga('send', {
            hitType: 'event',
            eventCategory: 'contato',
            eventAction: evento.target.id,
            eventLabel: 'preencheu'
        });
    }
})

const form = document.querySelector('form.contato')

if(form){
  form.onsubmit = function(evento) {
    evento.preventDefault()
  
    ga('send', {
      hitType: 'event',
      eventCategory: 'contato',
      eventAction: 'enviado',
      eventLabel: 'enviado'
    });
  
    form.submit()
  }
}