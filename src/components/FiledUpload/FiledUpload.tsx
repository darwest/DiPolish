//Оголошення функціонального компонента 
const FileUpload = () => {
/*У цій функції відбувається процес створення посилання для завантаження файлу.
вказаний шлях до файлу(fileUrl) та ім'я файлу(fileName). Потім створюється посилання, встановлюються 
атрибути href та download,і це посилання додається до тіла документа (document.body). Після цього викликається метод click() для активації завантаження, 
а потім посилання видаляється з тіла документа.*/
  const handleUpload = () => {

    const fileUrl = '../../../public/шпаргалка.pdf';
    const fileName = 'шпаргалка.pdf';

    const link = document.createElement('a');
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div>
      <button className="hint-btn" onClick={handleUpload}>Завантажити</button>
    </div>
  );
};

export default FileUpload;