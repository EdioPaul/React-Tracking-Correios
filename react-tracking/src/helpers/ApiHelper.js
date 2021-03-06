export const track = (trackingCode) => {
    const promiseCallBack = (resolve, reject) => {
        fetch(`http://localhost:3001/?tracking=${trackingCode}`)
           .then(response => response.json())
           .then(data => {
               const events = data.events || [];
                 resolve(events);
            })
          .catch(reject);
       }
    return new Promise(promiseCallBack);
}