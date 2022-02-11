import styled from "styled-components";
import UnstyledButton from "./UnstyledButton";
import { DialogOverlay, DialogContent } from "@reach/dialog";
import { IconPrevious, IconNext } from "./Icons";
import { QUERIES } from "../constants";
import VisuallyHidden from "./VisuallyHidden";
import Image from "next/image";

const CarouselImageZoomIn = ({
  isOpen,
  onDismiss,
  images,
  productName,
  currentImageIndex,
  onNextImage,
  onPrevImage,
  onSetIndex,
}) => {
  if (!isOpen) {
    return null;
  }

  return (
    <Overlay isOpen={isOpen} onDismiss={onDismiss}>
      <Content aria-label="Image Carousel Zoom In">
        <CarouselMainImage>
          <CarouselImage
            src={images[currentImageIndex].original}
            alt={productName}
            width={600}
            height={600}
          />
          <PrevButton onClick={onPrevImage}>
            <IconPrevious width={12} />
            <VisuallyHidden>Previous Image</VisuallyHidden>
          </PrevButton>
          <NextButton onClick={onNextImage}>
            <IconNext width={12} />
            <VisuallyHidden>Next Image</VisuallyHidden>
          </NextButton>
        </CarouselMainImage>

        <CarouselImagesRow>
          {images.map((image, index) => (
            <CarouselImageThumbnail
              key={index}
              src={image.thumbnail}
              alt={productName}
              onClick={onSetIndex.bind(this, index)}
              selected={index === currentImageIndex}
            />
          ))}
        </CarouselImagesRow>
      </Content>
    </Overlay>
  );
};

const Overlay = styled(DialogOverlay)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: hsla(220, 5%, 40%, 0.95);
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Content = styled(DialogContent)`
  width: max-content;
  @media ${QUERIES.tabletAndUp} {
    width: min-content;
  }
  height: auto;
  padding: 19px 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 24px;
`;

const CarouselMainImage = styled.div`
  width: min(100%, 550px);
  @media ${QUERIES.tabletAndUp} {
    width: max(100%, 550px);
  }
  height: min(auto, 550px);
  position: relative;
`;

const CarouselImagesRow = styled.div`
  display: flex;
  width: fit-content;
  gap: 16px;
  @media ${QUERIES.tabletAndUp} {
    gap: 32px;
  }
  justify-content: space-around;
`;

const CarouselImageThumbnail = styled.img`
  width: 64px;
  @media ${QUERIES.tabletAndUp} {
    width: 88px;
  }
  border-radius: 12px;
  object-fit: cover;
  border: ${({ selected }) =>
    selected ? "2px solid var(--color-primary)" : "none"};
  opacity: ${({ selected }) => (selected ? "0.4" : "1")};
  &:hover {
    cursor: pointer;
    opacity: 0.4;
  }
`;

const ActionButton = styled(UnstyledButton)`
  position: absolute;
  top: 50%;
  background-color: var(--color-white);
  border-radius: 50%;
  width: 40px;
  height: 40px;
  display: flex;
  align-items: center;
  &:hover {
    color: var(--color-primary);
  }
`;

const PrevButton = styled(ActionButton)`
  left: -16px;
  padding-left: 12px;
  :hover {
    color: var(--color-primary);
  }
`;

const NextButton = styled(ActionButton)`
  right: -16px;
  padding-left: 16px;
`;

const CarouselImage = styled(Image)`
  width: 100%;
  height: 100%;
  object-fit: cover;
  border-radius: 15px;
`;

export default CarouselImageZoomIn;
