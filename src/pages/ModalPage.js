import Modal from "../component/Modal";
import Button from "../component/Button";
import { useState } from "react";
function ModalPage() {
  const [showModal, setShowModal] = useState(false);
  const handlerClick = () => {
    setShowModal(true);
  };

  const handlClose = () => {
    setShowModal(false);
  };
  const actionBar = (
    <Button onClick={handlClose} primary>
      موافقت
    </Button>
  );

  const modal = (
    <Modal onClose={handlClose} actionBar={actionBar}>
      <p className="font-primary leading-8">
        لورم ایپسوم یا طرح‌نما (به انگلیسی: Lorem ipsum) به متنی آزمایشی و
        بی‌معنی در صنعت چاپ، صفحه‌آرایی و طراحی گرافیک گفته می‌شود. طراح گرافیک
        از این متن به عنوان عنصری از ترکیب بندی برای پر کردن صفحه و ارایه اولیه
        شکل ظاهری و کلی طرح سفارش گرفته شده استفاده می نماید، تا از نظر گرافیکی
        نشانگر چگونگی نوع و اندازه فونت و ظاهر متن باشد. معمولا طراحان گرافیک
        برای صفحه‌آرایی، نخست از متن‌های آزمایشی و بی‌معنی استفاده می‌کنند تا
        صرفا به مشتری یا صاحب کار خود نشان دهند که صفحه طراحی یا صفحه بندی شده
        بعد از اینکه متن در آن قرار گیرد چگونه به نظر می‌رسد و قلم‌ها و
        اندازه‌بندی‌ها چگونه در نظر گرفته شده‌است. از آنجایی که طراحان عموما
        نویسنده متن نیستند و وظیفه رعایت حق تکثیر متون را ندارند و در همان حال
        کار آنها به نوعی وابسته به متن می‌باشد آنها با استفاده از محتویات
        ساختگی، صفحه گرافیکی خود را صفحه‌آرایی می‌کنند تا مرحله طراحی و
        صفحه‌بندی را به پایان برند.
      </p>
    </Modal>
  );

  return (
    <div className="relative">
      <Button
        onClick={handlerClick}
        primary
        className="absolute left-1/2 bottom-1/2"
      >
        Open Modal
      </Button>
      {showModal && modal}
    </div>
  );
}

export default ModalPage;
