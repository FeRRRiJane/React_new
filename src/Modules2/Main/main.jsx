import React from 'react';
import 'normalize.css';
import header from '../../Modules2/Main/main.css'

function Main2() {
  return (
    <div className='container'>
        <div className='p2__main'>
            <div className="p2__main-kr">
                <h1 className='kr__title'>
                    Кредит наличными
                </h1>
                <div className='yslov'>
                    <h2 className='yslov__title'>Условия:</h2>
                </div>
                <div className='odobr'>
                    <h2 className='odobr__title'>Одобряемость:</h2>
                </div>
                <div className='osob'>
                    <h2 className='osob__title'>Особенности:</h2>
                </div>

            </div>
            <div className="p2__main-px">
                <h1 className='px__main-title'>Рекомендации</h1>
                <div className="px">
                    <h4 className='px_title'>Кредит Наличными</h4>
                    <p className='px__p'>
                        До 5 000 000 рублей
                    </p>
                    <p className='px__p'>
                        До 5 лет
                    </p>
                    <p className='px__p'>
                        От 3,9 %
                    </p>
                </div>
                <div className="px">
                    <h4 className='px_title'>Кредит Наличными</h4>
                    <p className='px__p'>
                        До 5 000 000 рублей
                    </p>
                    <p className='px__p'>
                        До 5 лет
                    </p>
                    <p className='px__p'>
                        От 3,9 %
                    </p>
                </div>
            </div>
        </div>
    </div>
  );
}

export default Main2;