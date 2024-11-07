"use client";
import { TProjectData } from "@/src/types";
import { Button } from "@nextui-org/button";
import { Card, CardBody, CardFooter } from "@nextui-org/card";
import { Link } from "@nextui-org/link";
import { AddIcon } from "../icons";
import {
  Modal,
  ModalBody,
  ModalContent,
  useDisclosure,
} from "@nextui-org/modal";

export default function ProjectCard({ project }: { project: TProjectData }) {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <>
      <Card className="py-4 px-5" shadow="none" classNames={{base:"border"}}>
        <CardBody className=" py-2">
          <div className="relative w-full h-[400px] overflow-hidden group">
            <img
              alt="Card background"
              className="object-cover rounded-xl  group-hover:translate-y-[-50%] transition-transform duration-[5s] ease-linear"
              src={project?.image}
            />
            <Button
              isIconOnly
              color="secondary"
              className="absolute top-[45%] left-1/2 transform -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 shadow-xl shadow-gray-600"
              onPress={onOpen}
            >
              <AddIcon className="size-7  fill-background" />
            </Button>
          </div>
        </CardBody>
        <CardFooter className="flex">
          <div className="flex-1">
            <p className="font-chakra font-bold text-3xl mb-2">
              {project?.title}
            </p>
            <div className="text-slate-500">
              <p>
                <span className="font-chakra font-semibold text-lg me-2">
                  Frontend Technology:
                </span>
                {project.frontendTechnology}
              </p>
              <p>
                <span className="font-chakra font-semibold  text-lg me-2">
                  Backend Technology:
                </span>
                {project.backendTechnology}
              </p>
            </div>

            <div className="mt-2">
              <p className="font-chakra font-bold underline text-xl">Links</p>
              <div className="flex items-center gap-2">
                <p className="font-chakra font-semibold text-lg text-slate-500 me-2">
                  Live Links:
                </p>
                {project.liveLinks.map((item, index) => (
                  <Link
                    key={index}
                    isBlock
                    showAnchorIcon
                    underline="always"
                    isExternal
                    href={item.link}
                    color="primary"
                  >
                    {item.linkSource}
                  </Link>
                ))}
              </div>
              <div className="flex items-center gap-2">
                <p className="font-chakra font-semibold text-lg text-slate-500 me-2">
                  Github Links:
                </p>
                {project.githubLinks.map((item, index) => (
                  <Link
                    key={index}
                    isBlock
                    showAnchorIcon
                    underline="always"
                    isExternal
                    href={item.link}
                    color="primary"
                  >
                    {item.linkSource}
                  </Link>
                ))}
              </div>
            </div>
            <div></div>
          </div>
          <div>
            <Button
              showAnchorIcon
              href={project.liveClientLink}
              as={Link}
              color="secondary"
              variant="faded"
            >
              Vist Site
            </Button>
          </div>
        </CardFooter>
      </Card>
      <Modal
        isOpen={isOpen}
        onOpenChange={onOpenChange}
        hideCloseButton
        size="5xl"
        placement="top"
      >
        <ModalContent>
          {(onClose) => (
            <>
              <ModalBody className="p-0">
                <img
                  alt="Card background"
                  className="object-cover "
                  src={project?.image}
                />
              </ModalBody>
            </>
          )}
        </ModalContent>
      </Modal>
    </>
  );
}