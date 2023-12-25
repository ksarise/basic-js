const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array of domains, return the object with the appearances of the DNS.
 *
 * @param {Array} domains
 * @return {Object}
 *
 * @example
 * domains = [
 *  'code.yandex.ru',
 *  'music.yandex.ru',
 *  'yandex.ru'
 * ]
 *
 * The result should be the following:
 * {
 *   '.ru': 3,
 *   '.ru.yandex': 3,
 *   '.ru.yandex.code': 1,
 *   '.ru.yandex.music': 1,
 * }
 *
 */
function getDNSStats(domains) {
  const result = {};
  for (let i = 0; i < domains.length; i += 1) {
      let subdomain = '';
      let subdomains = domains[i].split('.').reverse();
      console.log(subdomains);
      for (let j = 0; j < subdomains.length; j += 1){
          subdomain += `.${subdomains[j]}`;
          console.log('sub',subdomain);
          result[subdomain] = (result[subdomain] || 0) + 1;
      }
  }
return result;
}

module.exports = {
  getDNSStats
};
