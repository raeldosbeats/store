const songs = [
  {
    name: "Porsche",
    url: "https://firebasestorage.googleapis.com/v0/b/beatstore-81370.appspot.com/o/audios%2FPorque_apagou_a_mensagem.mp3?alt=media&token=bd742233-833f-42ac-be97-db1fd3c952c3",
    image: "https://files.porsche.com/filestore/image/multimedia/none/motorsport%C2%B520-racingcars-gt2-rs-clubsport-evo-kit/normal/4d93e090-67f9-11ee-8109-005056bbdc38;s3/porsche-normal.jpg",
    buyLink: "https://google.com",
    bpm: 120,
    key: "Fm",
    duration: "02:35",
    price: 249.99,
  },
  {
    name: "Panamera",
    url: "https://firebasestorage.googleapis.com/v0/b/beatstore-81370.appspot.com/o/audios%2FCe_t%C3%A1_que_t%C3%A1.mp3?alt=media&token=7d9b40eb-ef63-4bbf-995a-7fe312cf4579",
    image: "https://p2.trrsf.com/image/fget/cf/774/0/images.terra.com/2020/08/25/p200406a3rgb.jpg",
    buyLink: "https://youtube.com",
    bpm: 120,
    key: "C#m",
    duration: "03:22",
    price: 249.99,
  },

  // Adicione mais músicas conforme necessário
];

document.addEventListener("DOMContentLoaded", function() {
    const musicTable = document.getElementById("musicTable");
    const audioPlayer = document.getElementById("audioPlayer");
    const audioSource = document.getElementById("audioSource");

    function populateMusicTable() {
        songs.forEach(function(song) {
            const row = document.createElement("tr");

            // Coluna da capa da música
            const coverCell = document.createElement("td");
            const coverImage = document.createElement("img");
            coverImage.src = song.image;
            coverImage.alt = "Capa da Música";
            coverCell.appendChild(coverImage);
            row.appendChild(coverCell);

            // Coluna do nome da música
            const nameCell = document.createElement("td");
            nameCell.textContent = song.name;
            row.appendChild(nameCell);

            // Coluna do BPM da música
            const bpmCell = document.createElement("td");
            bpmCell.textContent = song.bpm;
            row.appendChild(bpmCell);
            bpmCell.classList.add('responsive-hide')

            // Coluna do Tom da música
            const keyCell = document.createElement("td");
            keyCell.textContent = song.key;
            row.appendChild(keyCell);
            keyCell.classList.add('responsive-hide')

            // Coluna do Tempo de música
            const durationCell = document.createElement("td");
            durationCell.textContent = song.duration;
            row.appendChild(durationCell);
            durationCell.classList.add('responsive-hide')

            // Coluna do botão de compra
            const buyCell = document.createElement("td");
            const buyButton = document.createElement("button");
            buyButton.innerHTML = `<i class="bi bi-bag"></i> + R$ ${song.price}`;
            buyButton.addEventListener("click", function() {
                window.open(song.buyLink, "_blank");
            });
            buyCell.appendChild(buyButton);
            row.appendChild(buyCell);

            // Adicionar linha à tabela
            musicTable.appendChild(row);

            // Event listener para reproduzir música quando clicar na linha da tabela
            row.addEventListener("click", function() {
                audioSource.src = song.url;
                audioPlayer.load();
                audioPlayer.play();
            });
        });
    }

    // Chamar função para popular a tabela ao carregar a página
    populateMusicTable();
});
