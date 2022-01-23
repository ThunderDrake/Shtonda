import _vars from '../_vars'
import { enableScroll } from '../functions/enableScroll'
import { disableScroll } from '../functions/disableScroll'

const buttonStartCord = _vars.menuButton.getBoundingClientRect();

_vars.menuBody.style.paddingLeft = `${buttonStartCord.x}px`;

_vars.menuButton.addEventListener('click', () => {
  if(_vars.menuButton.classList.contains('header__menu--active')) {
    _vars.menuButton.classList.remove('header__menu--active');
    enableScroll();
    _vars.menuButton.innerHTML = 'Меню'
    _vars.menuButton.style.setProperty('--color', 'var(--color-text)');
    _vars.menuBody.classList.remove('scrollRight');
    _vars.menuBody.classList.add('scrollLeft');
  } else {
    _vars.menuButton.classList.add('header__menu--active');
    disableScroll();
    _vars.menuButton.innerHTML = 'Назад'
    _vars.menuButton.style.setProperty('--color', 'var(--color-background)')
    _vars.menuBody.classList.remove('scrollLeft');
    _vars.menuBody.classList.add('scrollRight');
  }
});
