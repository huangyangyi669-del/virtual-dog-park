const characters = {
  naiwa: { name: '奶蛙', image: 'assets/naiwa.png' },
  naidan: { name: '奶蛋', image: 'assets/naidan.png' },
  pink: { name: '粉色奶蛙', image: 'assets/pink.png' }
};
const app = document.getElementById('pet-app');
let pet = null;
function stageFor(day) { return day === 1 ? '幼年期' : day <= 3 ? '成长期' : '成年期'; }
function savePet() { /* Saved progress is added in Round 3. */ }
function render() {
  if (!pet) {
    app.innerHTML = `<div class="adopt-layout"><div class="adopt-art"><img id="preview" src="assets/naiwa.png" alt="奶蛙形象预览"></div><form id="adopt-form" novalidate><h3>把快乐带回家。</h3><p class="small">选一位奶家人，给它一个专属名字。</p><div class="form-field"><label for="breed">选择小伙伴</label><select id="breed"><option value="naiwa">奶蛙</option><option value="naidan">奶蛋</option><option value="pink">粉色奶蛙</option></select></div><div class="form-field"><label for="pet-name">它叫什么？（最多 20 个字符）</label><input id="pet-name" maxlength="20" placeholder="例如：笑笑" autocomplete="off" aria-describedby="name-error"></div><p id="name-error" class="error" role="alert"></p><button type="submit">带它回家 ↗</button></form></div>`;
    const breed = document.getElementById('breed');
    breed.addEventListener('change', () => {
      const preview = document.getElementById('preview');
      preview.src = characters[breed.value].image;
      preview.alt = characters[breed.value].name + '形象预览';
    });
    document.getElementById('adopt-form').addEventListener('submit', event => {
      event.preventDefault();
      const input = document.getElementById('pet-name');
      const name = input.value.trim();
      if (!name || name.length > 20) {
        document.getElementById('name-error').textContent = '请输入 1–20 个字符的名字，不能只有空格。';
        input.setAttribute('aria-invalid', 'true'); input.focus(); return;
      }
      pet = { name, breed: breed.value, day: 1, happiness: 50 };
      savePet(); render();
    });
    return;
  }
  app.innerHTML = `<div class="dog-layout"><div class="pet-art"><img id="pet-image" alt=""></div><div><p class="eyebrow">HOME SWEET HOME</p><h3 id="display-name"></h3><p id="display-breed" class="small"></p><div class="stats"><div><strong id="day"></strong><span>相伴的日子</span></div><div><strong id="stage"></strong><span>当前成长阶段</span></div><div><strong id="happiness"></strong><span>快乐值 / 100</span></div></div><label for="happy-bar">快乐能量</label><progress id="happy-bar" max="100"></progress><div id="growth-slot"></div><div class="actions"><button id="feed">喂食 Feed +10</button><button id="play" class="secondary">玩耍 Play +10</button><span id="day-slot"></span></div><p class="status" role="status" id="message">今天也一起开心吧。</p><div id="reset-slot"></div></div></div>`;
  // A visitor's name is always inserted as text, never as HTML.
  document.getElementById('display-name').textContent = pet.name;
  document.getElementById('display-breed').textContent = characters[pet.breed].name;
  document.getElementById('day').textContent = 'Day ' + pet.day;
  document.getElementById('stage').textContent = stageFor(pet.day);
  document.getElementById('happiness').textContent = pet.happiness;
  document.getElementById('happy-bar').value = pet.happiness;
  const image = document.getElementById('pet-image');
  image.src = characters[pet.breed].image; image.alt = pet.name + '，' + characters[pet.breed].name;
  document.getElementById('feed').addEventListener('click', () => care('吃饱啦，快乐加满一点！'));
  document.getElementById('play').addEventListener('click', () => care('一起玩，笑声停不下来！'));
  addGrowthControls();
}
function care(message) {
  pet.happiness = Math.min(100, pet.happiness + 10);
  savePet(); render();
  document.getElementById('message').textContent = message;
  document.getElementById('pet-image').classList.add('bounce');
}
function addGrowthControls() { /* Added in Round 3. */ }
render();
